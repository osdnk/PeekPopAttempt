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

RCT_EXPORT_METHOD(setSourceViewAndActivate:(nonnull NSNumber *)peekable:(nonnull NSNumber *)preview)
{
  [self.bridge.uiManager addUIBlock:^(__unused RCTUIManager *uiManager, NSDictionary<NSNumber *, UIView *> *viewRegistry) {
    RCTView *peekableView = (RCTView *)viewRegistry[peekable];
    RootViewController *rootViewController = (RootViewController *)[[[[UIApplication sharedApplication] delegate] window] rootViewController];
    [rootViewController setSourceView:peekableView];
    RNPreviewView *previewView = (RNPreviewView *)viewRegistry[preview];
    RNPreviewViewController *controller = [previewView getPreviewViewController];
    [rootViewController setPreviewController:controller forReactPreviewView:previewView];
  }];
}

RCT_EXPORT_VIEW_PROPERTY(onPop, RCTDirectEventBlock);

@end
