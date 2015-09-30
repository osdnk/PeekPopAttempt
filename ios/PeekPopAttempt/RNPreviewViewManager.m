#import "RNPreviewViewManager.h"
#import "RNPreviewView.h"
#import "RCTBridge.h"
#import "RCTUIManager.h"
#import "RCTSparseArray.h"
#import "AppDelegate.h"
#import "RootViewController.h"

@implementation RNPreviewViewManager

RCT_EXPORT_MODULE();

@synthesize bridge = _bridge;
@synthesize methodQueue = _methodQueue;

- (UIView *)view
{
  return [[RNPreviewView alloc] initWithBridge:_bridge];
}

- (dispatch_queue_t)methodQueue
{
  return _bridge.uiManager.methodQueue;
}

RCT_EXPORT_METHOD(activate:(nonnull NSNumber *)reactTag)
{
  [self.bridge.uiManager addUIBlock:^(__unused RCTUIManager *uiManager, RCTSparseArray *viewRegistry) {
    RNPreviewView *view = viewRegistry[reactTag];
    if (![view isKindOfClass:[RNPreviewView class]]) {
      RCTLogError(@"Invalid view returned from registry, expecting RNPreviewView, got: %@", view);
    } else {
      NSLog(@"got here!");
      PreviewViewController *controller = [view getPreviewViewController];
      RootViewController *rootViewController = [[[[UIApplication sharedApplication] delegate] window] rootViewController];
      [rootViewController setPreviewController:controller];
      /* Here I think we just need to somehow tell the RootViewController that we want to use this controller as preview */
    }
  }];
}

@end
