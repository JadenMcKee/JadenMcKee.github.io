// Ultra-aggressive script to hide trending tags and recently updated panels
(function() {
  'use strict';
  
  function hidePanels() {
    const sidebar = document.getElementById('sidebar');
    if (!sidebar) return;
    
    // Get ALL h5 headings in sidebar
    const headings = sidebar.querySelectorAll('h5, h4, h3, h6');
    
    headings.forEach(function(heading) {
      const headingText = (heading.textContent || '').toLowerCase().trim();
      
      // Find the panel container (parent div)
      let panel = heading.parentElement;
      while (panel && panel !== sidebar && panel.tagName !== 'DIV') {
        panel = panel.parentElement;
      }
      
      if (!panel || panel === sidebar) {
        // If no parent div found, use the heading's parent
        panel = heading.parentElement;
      }
      
      // Hide trending tags
      if (headingText === 'trending tags' || headingText.includes('trending tags')) {
        if (panel) {
          panel.style.cssText = 'display: none !important; visibility: hidden !important; height: 0 !important; overflow: hidden !important; margin: 0 !important; padding: 0 !important;';
        }
        heading.style.cssText = 'display: none !important; visibility: hidden !important;';
      }
      
      // Hide recently updated
      if (headingText === 'recently updated' || 
          headingText.includes('recently updated') ||
          headingText === 'recent posts' ||
          headingText.includes('recent posts')) {
        if (panel) {
          panel.style.cssText = 'display: none !important; visibility: hidden !important; height: 0 !important; overflow: hidden !important; margin: 0 !important; padding: 0 !important;';
          // Also hide parent if it's a panel wrapper
          let parent = panel.parentElement;
          if (parent && parent !== sidebar && (parent.id === 'panel-wrapper' || parent.className.includes('panel-wrapper'))) {
            // Hide the first child which is usually recently updated
            if (parent.children[0]) {
              parent.children[0].style.cssText = 'display: none !important; visibility: hidden !important; height: 0 !important; overflow: hidden !important; margin: 0 !important; padding: 0 !important;';
            }
          }
        }
        heading.style.cssText = 'display: none !important; visibility: hidden !important;';
      }
    });
  }
  
  // Run immediately
  hidePanels();
  
  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', hidePanels);
  }
  
  // Run multiple times
  setTimeout(hidePanels, 50);
  setTimeout(hidePanels, 200);
  setTimeout(hidePanels, 500);
  setTimeout(hidePanels, 1000);
  setTimeout(hidePanels, 2000);
  setTimeout(hidePanels, 3000);
  
  // Use MutationObserver
  if (typeof MutationObserver !== 'undefined') {
    const observer = new MutationObserver(hidePanels);
    const sidebar = document.getElementById('sidebar');
    if (sidebar) {
      observer.observe(sidebar, {
        childList: true,
        subtree: true,
        attributes: true
      });
    }
  }
})();
