// Function to create a post

function createPost(post) {

    return new Promise((resolve, reject) => {
  
      setTimeout(() => {
  
        console.log(`Post created: ${post}`);
  
        resolve(post);
  
      }, 1000);
  
    });
  
  }
  
  
  
  // Function to update the user's last activity time
  
  function updateLastUserActivityTime() {
  
    return new Promise((resolve, reject) => {
  
      setTimeout(() => {
  
        const lastActivityTime = new Date();
  
        console.log(`Last activity time updated: ${lastActivityTime}`);
  
        resolve(lastActivityTime);
  
      }, 1000);
  
    });
  
  }
  
  
  
  // Function to delete a post
  
  function deletePost(post) {
  
    return new Promise((resolve, reject) => {
  
      setTimeout(() => {
  
        console.log(`Post deleted: ${post}`);
  
        resolve(post);
  
      }, 1000);
  
    });
  
  }
  
  
  
  // Helper function to log posts and last activity time.
  
  function logPostsAndLastActivity(posts, lastActivityTime) {
  
    console.log('All posts:', posts);
  
    console.log('Last Activity Time:', lastActivityTime);
  
  }
  
  
  
  // Main function to perform the tasks in parallel using Promise.all
  
  function main() {
  
    const createPost1 = createPost('Post 1');
  
    const updateUserActivityTime = updateLastUserActivityTime();
  
    const createPost2 = createPost('Post 2');
  
  
  
    Promise.all([createPost1, updateUserActivityTime, createPost2])
  
      .then(([post1, lastActivityTime, post2]) => {
  
        logPostsAndLastActivity([post1, post2], lastActivityTime);
  
        
  
        // Delete a post
  
        return deletePost(post2);
  
      })
  
      .then(() => {
  
        console.log('Post 2 has been deleted.');
  
      })
  
      .catch(error => {
  
        console.error('An error occurred:', error);
  
      });
  
  }
  
  main();