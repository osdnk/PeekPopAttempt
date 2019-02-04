#import "RNPreviewView.h"
#import "RNPreviewViewController.h"
#import "RCTUIManager.h"
#import "UIView+React.h"

@implementation RNPreviewView {
  RNPreviewViewController *_controller;
  RCTView *_previewBaseView;
}

- (id)initWithBridge:(RCTBridge *)bridge
{
  if ((self = [super initWithFrame:CGRectZero])) {
    _controller = [[RNPreviewViewController alloc] init];
    _previewBaseView = [[RCTView alloc] init];
    _controller.view = _previewBaseView;
  }

  return self;
}

- (RNPreviewViewController *)getPreviewViewController {
  return _controller;
}

- (void)didPop
{
  if (_onPop) {
    _onPop(@{});
  }
}

- (void)didPeek
{
  if (_onPeek) {
    _onPeek(@{});
  }
}

- (NSArray *)__reactSubviews
{
  return [NSArray arrayWithObjects:_previewBaseView, nil];
}

- (void)__insertReactSubview:(UIView *)view atIndex:(NSInteger)atIndex
{
  [_previewBaseView insertReactSubview:view atIndex:atIndex];
}

@end
