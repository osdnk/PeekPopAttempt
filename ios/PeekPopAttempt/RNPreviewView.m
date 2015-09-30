#import "RNPreviewView.h"
#import "PreviewViewController.h"
#import "RCTUIManager.h"
#import "RCTView.h"
#import "UIView+React.h"

@implementation RNPreviewView {
  PreviewViewController *_controller;
  RCTView *_previewBaseView;
}

- (id)initWithBridge:(RCTBridge *)bridge
{
  if ((self = [super init])) {
    _controller = [[PreviewViewController alloc] init];
    _previewBaseView = [[RCTView alloc] init];
    _controller.view = _previewBaseView;
  }

  return self;
}

- (PreviewViewController *)getPreviewViewController {
  return _controller;
}

- (void)insertReactSubview:(UIView *)view atIndex:(NSInteger)atIndex
{
  /* Add subviews to the overlay base view rather than self */
  [_previewBaseView insertReactSubview:view atIndex:atIndex];
}

@end
