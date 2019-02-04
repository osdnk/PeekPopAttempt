#import "React/RCTView.h"
#import "RNPreviewViewController.h"
#import "React/RCTBridge.h"
#import "React/RCTComponent.h"


@interface RNPreviewView : RCTView

@property (nonatomic, copy) RCTDirectEventBlock onPop;
@property (nonatomic, copy) RCTDirectEventBlock onPeek;

- (id)initWithBridge:(RCTBridge *)bridge;
- (RNPreviewViewController *)getPreviewViewController;
- (void)didPop;
- (void)didPeek;

@end
