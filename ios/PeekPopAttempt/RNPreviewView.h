#import "RCTView.h"
#import "PreviewViewController.h"
#import "RCTBridge.h"

@interface RNPreviewView : RCTView

- (id)initWithBridge:(RCTBridge *)bridge;
- (PreviewViewController *)getPreviewViewController;

@end
