#import "React/RCTView.h"
#import "RNPreviewViewController.h"
#import "React/RCTBridge.h"
#import "React/RCTComponent.h"


@interface RNPreviewView : RCTView

@property (nonatomic, copy) RCTBubblingEventBlock onPop;

- (id)initWithBridge:(RCTBridge *)bridge;
- (RNPreviewViewController *)getPreviewViewController;
- (void)didPop;

@end
