#import "RNPreviewViewManager.h"
#import "React/RCTUIManager.h"


@implementation RNPreviewViewManager

RCT_EXPORT_MODULE();


- (UIView *)view
{
  return [[RNPreviewView alloc] initWithBridge:self.bridge];
}

- (dispatch_queue_t)methodQueue
{
  return RCTGetUIManagerQueue();
}

RCT_EXPORT_METHOD(setSourceView:(nonnull NSNumber *)reactTag)
{
  [self.bridge.uiManager addUIBlock:^(__unused RCTUIManager *uiManager, NSDictionary<NSNumber *, UIView *> *viewRegistry) {
    RCTView *view = viewRegistry[reactTag];
    RootViewController *rootViewController = [[[[UIApplication sharedApplication] delegate] window] rootViewController];
    [rootViewController setSourceView:view];
  }];
}

/* Need to be able to set the target view too */
RCT_EXPORT_METHOD(activate:(nonnull NSNumber *)reactTag)
{
  [self.bridge.uiManager addUIBlock:^(__unused RCTUIManager *uiManager, NSDictionary<NSNumber *, UIView *> *viewRegistry) {
    RNPreviewView *view = viewRegistry[reactTag];

    if (![view isKindOfClass:[RNPreviewView class]]) {
      RCTLogError(@"Invalid view returned from registry, expecting RNPreviewView, got: %@", view);
    } else {
      RNPreviewViewController *controller = [view getPreviewViewController];
      RootViewController *rootViewController = [[[[UIApplication sharedApplication] delegate] window] rootViewController];
      [rootViewController setPreviewController:controller forReactPreviewView:view];
    }
  }];
}

RCT_EXPORT_VIEW_PROPERTY(onPop, RCTBubblingEventBlock);

@end
