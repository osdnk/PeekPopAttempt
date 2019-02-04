#import "RootViewController.h"
#import "RNPreviewViewController.h"
#import "RNPreviewView.h"
#import "React/RCTView.h"

@class RCTComponent;

@interface RootViewController () <UIViewControllerPreviewingDelegate>
@end

@implementation RootViewController {
  RNPreviewViewController *_previewController;
  RNPreviewView *_reactView;
}

- (void)setPreviewController:(RNPreviewViewController *)controller forReactPreviewView:(RNPreviewView *)reactView
{
  _previewController = controller;
  _reactView = reactView;
}

- (void)setSourceView:(RCTView *)view
{
  [self registerForPreviewingWithDelegate:(id)self sourceView:view];
}

- (UIViewController *)previewingContext:(id<UIViewControllerPreviewing>)previewingContext viewControllerForLocation:(CGPoint)location
{
  if ([self.presentedViewController isKindOfClass:[RNPreviewViewController class]]) {
    return nil;
  }
  [_reactView didPeek];
  [_previewController setView:_reactView];

  return _previewController;
}

- (void)previewingContext:(id<UIViewControllerPreviewing>)previewingContext
        commitViewController:(UIViewController *)viewControllerToCommit
{
  [_reactView didPeek];
}

@end
