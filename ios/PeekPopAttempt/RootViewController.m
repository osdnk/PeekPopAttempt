#import "RootViewController.h"
#import "PreviewViewController.h"

@interface RootViewController () <UIViewControllerPreviewingDelegate>
@end

@implementation RootViewController {
  PreviewViewController *_previewController;
}

- (void)setPreviewController:(PreviewViewController *)controller {
  _previewController = controller;
}

- (void)viewWillAppear:(BOOL)animated {
  [self registerForPreviewingWithDelegate:(id)self sourceView:self.view];
}

# pragma mark - 3D Touch Delegate

- (UIViewController *)previewingContext:(id<UIViewControllerPreviewing>)previewingContext viewControllerForLocation:(CGPoint)location {
  if ([self.presentedViewController isKindOfClass:[PreviewViewController class]]) {
    return nil;
  }

  return _previewController;
}

- (void)previewingContext:(id<UIViewControllerPreviewing>)previewingContext
        commitViewController:(UIViewController *)viewControllerToCommit {
  /* Send the event across the bridge! */
}

@end
