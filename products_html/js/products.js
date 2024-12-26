function toggleDescription(element) {
  // Find the next sibling element (the description div)
  const description = element.closest('.product_itemize').querySelector('.product__item__description');
  // Toggle the visibility
  if (description.style.display === "none" || description.style.display === "") {
      description.style.display = "block";
  } else {
      description.style.display = "none";
  }
}

// function loadHtmlContent(url, targetElementId) {
//   console.log(`Attempting to load ${url} into ${targetElementId}`);
//   fetch(url)
//       .then(response => {
//           if (!response.ok) {
//               throw new Error(`Failed to load ${url}: ${response.statusText}`);
//           }
//           return response.text();
//       })
//       .then(html => {
//           console.log(`Loaded content from ${url}`);
//           document.getElementById(targetElementId).innerHTML = html;
//       })
//       .catch(error => {
//           console.error('Error loading HTML content:', error);
//       });
// }

// // Function to switch content dynamically
// function switchContent(section) {
//   const mainContent = document.getElementById('main-content');

//   // // Clear existing content
//   // mainContent.innerHTML = '';

//   // Add new content based on the clicked section
//   if (section === 'lighting') {
//     loadHtmlContent('./lighting.html', 'main-content');
//       // mainContent.innerHTML = `
//       //   <h3>Lighting Solutions</h3>
//       //   <div class="product__discount">
//       //       <!-- <div class="section-title product__discount__title">
//       //           <h2>Lighthing Solutions</h2>
//       //       </div> -->
//       //       <div class="row">
//       //           <div class="col-lg-4">
//       //               <div class="product_itemize">
//       //                   <!-- Picture -->
//       //                   <div class="product__item__pic">
//       //                       <li><a href="https://carousell.app.link/zc90iGxuiPb">
//       //                           <img src="img/product/discount/pd-1.jpg" alt="Product Image" style="width: 100%;">
//       //                       </a></li>
//       //                   </div>
//       //                   <!-- Title -->
//       //                   <div class="product__item__title">
//       //                       <h5>
//       //                           <a href="javascript:void(0);" class="dropdown-toggle" onclick="toggleDescription(this)">Raisin’n’nuts</a>
//       //                       </h5>
//       //                   </div>
//       //                   <!-- Description (Initially Hidden) -->
//       //                   <div class="product__item__description">
//       //                       <ul class="custom-bullet">
//       //                           <li>Meter</li>
//       //                           <li>Aircond panel</li>
//       //                       </ul>
//       //                   </div>
//       //               </div>
//       //           </div>
//       //       </div>
//       //   </div>
//       // `;
//   } else if (section === 'lcd') {
//       mainContent.innerHTML = `
//           <h3>LCD Restoration</h3>
//           <p>High-quality tools and techniques for restoring LCD displays.</p>
//       `;
//   } else if (section === 'sticker') {
//       mainContent.innerHTML = `
//           <h3>Sticker Artwork Design</h3>
//           <p>Creative and custom sticker artwork design solutions.</p>
//       `;
//   } else if (section === '3d') {
//       mainContent.innerHTML = `
//           <h3>3D Design Solution</h3>
//           <p>Professional 3D design services for all your projects.</p>
//       `;
//   } else if (section === 'electronics') {
//       mainContent.innerHTML = `
//           <h3>Electronics Repair Kits</h3>
//           <p>Comprehensive kits for electronics repair and maintenance.</p>
//       `;
//   } else if (section === 'parts') {
//       mainContent.innerHTML = `
//           <h3>Parts Repair Kits</h3>
//           <p>High-quality repair kits for various parts and components.</p>
//       `;
//   }
// }

function loadHtmlContent(url, targetElementId) {
  fetch(url)
      .then(response => {
          if (!response.ok) {
              throw new Error(`Failed to load ${url}: ${response.statusText}`);
          }
          return response.text();
      })
      .then(html => {
        console.error('Error loading HTML content:', html);
          document.getElementById(targetElementId).innerHTML = html;
      })
      .catch(error => {
          console.error('Error loading HTML content:', error);
      });
}

// Example: Call this function to load 'lighting_solutions.html' into a specific element
function switchContent(section) {
  if (section === 'lcd') {
    loadHtmlContent('./js/lcd_restoration.html', 'main-content');
}
}