// Function to create a post using async/await
async function createPost(post) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(`Post created: ${post}`);
        resolve(post);
      }, 1000);
    });
  }
  
  // Function to delete a post using async/await
  async function deletePost(post) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(`Post deleted: ${post}`);
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
  
  // Helper function to log posts and last activity time.
  function logPostsAndLastActivity(posts, lastActivityTime) {
    console.log('All posts:', posts);
    console.log('Last Activity Time:', lastActivityTime);
  }
  
  // Main function to perform the tasks in parallel using Promise.all
  async function main() {
    try {
      const createPost1 = await createPost('Post 1');
      const updateUserActivityTime = await updateLastUserActivityTime();
      const createPost2 = await createPost('Post 2');
  
      logPostsAndLastActivity([createPost1, createPost2], updateUserActivityTime);
  
      // Delete a post
      await deletePost(createPost2);
      console.log('Post 2 has been deleted.');
    } catch (error) {
      console.error('An error occurred:', error);
    }
  }
  
  main();
  