import {useState, useEffect} from 'react';


import ProgressBar from 'react-bootstrap/ProgressBar';
import ToDo from './components/ToDo.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import one from './sounds/1.mp3';
import two from './sounds/2.mp3';
import three from './sounds/3.mp3';
import four from './sounds/4.mp3';
import five from './sounds/5.mp3';
import six from './sounds/6.mp3';


import './App.css';

const sounds = [one, two, three, four, five, six];

const data = [{"status": false, "link": "https://leetcode.com/problems/sort-colors/", "title": "Sort an array of 0\u2019s 1\u2019s 2\u2019s without using extra space or sorting algo", "id": 1}, {"status": false, "link": "https://www.geeksforgeeks.org/find-a-repeating-and-a-missing-number/", "title": "Repeat and Missing Number", "id": 2}, {"status": false, "link": "https://www.geeksforgeeks.org/efficiently-merging-two-sorted-arrays-with-o1-extra-space/", "title": "Merge two sorted Arrays without extra space", "id": 3}, {"status": false, "link": "https://leetcode.com/problems/maximum-subarray/", "title": "Kadane\u2019s Algorithm", "id": 4}, {"status": false, "link": "https://leetcode.com/problems/merge-intervals/", "title": "Merge Overlapping Subintervals", "id": 5}, {"status": false, "link": "https://leetcode.com/problems/find-the-duplicate-number/solution/", "title": "Find the duplicate in an array of N+1 integers", "id": 6}, {"status": false, "link": "https://leetcode.com/problems/set-matrix-zeroes/", "title": "Set Matrix Zeroes", "id": 7}, {"status": false, "link": "https://leetcode.com/problems/pascals-triangle/", "title": "Pascal\u2019s Triangle", "id": 8}, {"status": false, "link": "https://leetcode.com/problems/next-permutation/", "title": "Next Permutation", "id": 9}, {"status": false, "link": "https://www.geeksforgeeks.org/counting-inversions/", "title": "Count Inversions in an array", "id": 10}, {"status": false, "link": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/", "title": "Best Time to Buy and Sell Stock", "id": 11}, {"status": false, "link": "https://leetcode.com/problems/rotate-image/", "title": "Rotate Image", "id": 12}, {"status": false, "link": "https://leetcode.com/problems/search-a-2d-matrix/", "title": "Search a 2D Matrix", "id": 13}, {"status": false, "link": "https://leetcode.com/problems/powx-n/", "title": "Pow(x, n)", "id": 14}, {"status": false, "link": "https://leetcode.com/problems/majority-element/", "title": "Majority Element", "id": 15}, {"status": false, "link": "https://leetcode.com/problems/majority-element-ii/", "title": "Majority Element II", "id": 16}, {"status": false, "link": "https://leetcode.com/problems/unique-paths/", "title": "Unique Paths", "id": 17}, {"status": false, "link": "https://leetcode.com/problems/reverse-pairs/", "title": "Reverse Pairs", "id": 18}, {"status": false, "link": "https://leetcode.com/problems/two-sum/", "title": "Two Sum", "id": 19}, {"status": false, "link": "https://leetcode.com/problems/4sum/", "title": "4Sum", "id": 20}, {"status": false, "link": "https://leetcode.com/problems/longest-consecutive-sequence/", "title": "Longest Consecutive Sequence", "id": 21}, {"status": false, "link": "https://practice.geeksforgeeks.org/problems/largest-subarray-with-0-sum/1#", "title": "Largest subarray with 0 sum", "id": 22}, {"status": false, "link": "https://www.geeksforgeeks.org/count-number-subarrays-given-xor/", "title": "Count the number of subarrays having a given XOR", "id": 23}, {"status": false, "link": "https://leetcode.com/problems/longest-substring-without-repeating-characters/", "title": "Longest Substring Without Repeating Characters", "id": 24}, {"status": false, "link": "https://leetcode.com/problems/reverse-linked-list/", "title": "Reverse Linked List", "id": 25}, {"status": false, "link": "https://leetcode.com/problems/middle-of-the-linked-list/", "title": "Middle of the Linked List", "id": 26}, {"status": false, "link": "https://leetcode.com/problems/merge-two-sorted-lists/", "title": "Merge Two Sorted Lists", "id": 27}, {"status": false, "link": "https://leetcode.com/problems/remove-nth-node-from-end-of-list/submissions/", "title": "Remove Nth Node From End of List", "id": 28}, {"status": false, "link": "https://leetcode.com/problems/delete-node-in-a-linked-list/", "title": "Delete Node in a Linked List", "id": 29}, {"status": false, "link": "https://leetcode.com/problems/add-two-numbers/", "title": "Add Two Numbers", "id": 30}, {"status": false, "link": "https://leetcode.com/problems/intersection-of-two-linked-lists/", "title": "Intersection of Two Linked Lists", "id": 31}, {"status": false, "link": "https://leetcode.com/problems/linked-list-cycle/", "title": "Linked List Cycle", "id": 32}, {"status": false, "link": "https://leetcode.com/problems/reverse-nodes-in-k-group/", "title": "Reverse Nodes in k-Group", "id": 33}, {"status": false, "link": "https://leetcode.com/problems/palindrome-linked-list/", "title": "Palindrome Linked List", "id": 34}, {"status": false, "link": "https://leetcode.com/problems/linked-list-cycle-ii/", "title": "Linked List Cycle II", "id": 35}, {"status": false, "link": "https://practice.geeksforgeeks.org/problems/flattening-a-linked-list/1#", "title": "Flattening a Linked List", "id": 36}, {"status": false, "link": "https://leetcode.com/problems/rotate-list/", "title": "Rotate List", "id": 37}, {"status": false, "link": "https://leetcode.com/problems/copy-list-with-random-pointer/", "title": "Copy List with Random Pointer", "id": 38}, {"status": false, "link": "https://leetcode.com/problems/3sum/", "title": "3Sum", "id": 39}, {"status": false, "link": "https://leetcode.com/problems/trapping-rain-water/", "title": "Trapping Rain Water", "id": 40}, {"status": false, "link": "https://leetcode.com/problems/remove-duplicates-from-sorted-array/", "title": "Remove Duplicates from Sorted Array", "id": 41}, {"status": false, "link": "https://leetcode.com/problems/max-consecutive-ones/", "title": "Max Consecutive Ones", "id": 42}, {"status": false, "link": "https://practice.geeksforgeeks.org/problems/n-meetings-in-one-room-1587115620/1#", "title": "N meetings in one room", "id": 43}, {"status": false, "link": "https://practice.geeksforgeeks.org/problems/minimum-platforms-1587115620/1#", "title": "Minimum Platforms", "id": 44}, {"status": false, "link": "https://practice.geeksforgeeks.org/problems/job-sequencing-problem-1587115620/1#", "title": "Job Sequencing Problem", "id": 45}, {"status": false, "link": "https://practice.geeksforgeeks.org/problems/fractional-knapsack-1587115620/1#", "title": "Fractional Knapsack", "id": 46}, {"status": false, "link": "https://www.geeksforgeeks.org/greedy-algorithm-to-find-minimum-number-of-coins/", "title": "Greedy Algorithm to find Minimum number of Coins", "id": 47}, {"status": false, "link": "https://practice.geeksforgeeks.org/problems/subset-sums2234/1#", "title": "Subset Sums", "id": 48}, {"status": false, "link": "https://leetcode.com/problems/subsets-ii/", "title": "Subsets II", "id": 49}, {"status": false, "link": "https://leetcode.com/problems/combination-sum/", "title": "Combination Sum", "id": 50}, {"status": false, "link": "https://leetcode.com/problems/combination-sum-ii/", "title": "Combination Sum II", "id": 51}, {"status": false, "link": "https://leetcode.com/problems/palindrome-partitioning/", "title": "Palindrome Partitioning", "id": 52}, {"status": false, "link": "https://leetcode.com/problems/permutation-sequence/", "title": "Permutation Sequence", "id": 53}, {"status": false, "link": "https://leetcode.com/problems/permutations/", "title": "Permutations", "id": 54}, {"status": false, "link": "https://leetcode.com/problems/n-queens-ii/", "title": "N-Queens", "id": 55}, {"status": false, "link": "https://leetcode.com/problems/sudoku-solver/", "title": "Sudoku Solver", "id": 56}, {"status": false, "link": "https://www.geeksforgeeks.org/m-coloring-problem-backtracking-5/", "title": "m Coloring Problem", "id": 57}, {"status": false, "link": "https://practice.geeksforgeeks.org/problems/rat-in-a-maze-problem/1#", "title": "Rat in a Maze", "id": 58}, {"status": false, "link": "https://leetcode.com/problems/word-break/", "title": "Word Break", "id": 59}, {"status": false, "link": "https://www.geeksforgeeks.org/calculating-n-th-real-root-using-binary-search/", "title": "Calculating n-th real root using binary search", "id": 60}, {"status": false, "link": "https://practice.geeksforgeeks.org/problems/median-in-a-row-wise-sorted-matrix1527/1#", "title": "Median in a row-wise sorted Matrix", "id": 61}, {"status": false, "link": "https://leetcode.com/problems/single-element-in-a-sorted-array/", "title": "Single Element in a Sorted Array", "id": 62}, {"status": false, "link": "https://leetcode.com/problems/search-in-rotated-sorted-array/", "title": "Search in Rotated Sorted Array", "id": 63}, {"status": false, "link": "https://leetcode.com/problems/median-of-two-sorted-arrays/", "title": "Median of Two Sorted Arrays", "id": 64}, {"status": false, "link": "https://www.geeksforgeeks.org/k-th-element-two-sorted-arrays/", "title": "K-th Element of Two Sorted Arrays", "id": 65}, {"status": false, "link": "https://leetcode.com/problems/power-of-two/", "title": "Power of Two", "id": 66}, {"status": false, "link": "https://leetcode.com/problems/counting-bits/", "title": "Counting Bits", "id": 67}, {"status": false, "link": "https://www.geeksforgeeks.org/divide-two-integers-without-using-multiplication-division-mod-operator/", "title": "Divide two integers without using multiplication, division and mod operator", "id": 68}, {"status": false, "link": "https://leetcode.com/problems/subsets/", "title": "Subsets", "id": 69}, {"status": false, "link": "https://www.codingninjas.com/codestudio/problems/find-msb-in-o-1_1112570", "title": "Find MSB In O(1)", "id": 70}, {"status": false, "link": "https://www.geeksforgeeks.org/calculate-square-of-a-number-without-using-and-pow/", "title": "Calculate square of a number without using *, / and pow()", "id": 71}, {"status": false, "link": "https://practice.geeksforgeeks.org/problems/implement-stack-using-array/1#", "title": "Implement stack using array", "id": 72}, {"status": false, "link": "https://practice.geeksforgeeks.org/problems/implement-queue-using-array/1#", "title": "Implement Queue using array", "id": 73}, {"status": false, "link": "https://practice.geeksforgeeks.org/problems/implement-stack-using-linked-list/1", "title": "Implement Stack using Linked List", "id": 74}, {"status": false, "link": "https://practice.geeksforgeeks.org/problems/implement-queue-using-linked-list/1", "title": "Implement Queue using Linked List", "id": 75}, {"status": false, "link": "https://practice.geeksforgeeks.org/problems/bfs-traversal-of-graph/1#", "title": "BFS of graph", "id": 76}, {"status": false, "link": "https://leetcode.com/problems/implement-stack-using-queues/", "title": "Implement Stack using Queues", "id": 77}, {"status": false, "link": "https://leetcode.com/problems/implement-queue-using-stacks/", "title": "Implement Queue using Stacks", "id": 78}, {"status": false, "link": "https://leetcode.com/problems/valid-parentheses/", "title": "Valid Parentheses", "id": 79}, {"status": false, "link": "https://practice.geeksforgeeks.org/problems/next-larger-element-1587115620/1#", "title": "Next Greater Element", "id": 80}, {"status": false, "link": "https://www.interviewbit.com/problems/nearest-smaller-element/", "title": "Nearest Smaller Element", "id": 81}, {"status": false, "link": "https://leetcode.com/problems/lru-cache/", "title": "LRU Cache", "id": 82}, {"status": false, "link": "https://leetcode.com/problems/largest-rectangle-in-histogram/", "title": "Largest Rectangle in Histogram", "id": 83}, {"status": false, "link": "https://leetcode.com/problems/sliding-window-maximum/", "title": "Sliding Window Maximum", "id": 84}, {"status": false, "link": "https://leetcode.com/problems/min-stack/", "title": "Min Stack", "id": 85}, {"status": false, "link": "https://leetcode.com/problems/rotting-oranges/", "title": "Rotting Oranges", "id": 86}, {"status": false, "link": "https://leetcode.com/problems/reverse-words-in-a-string/", "title": "Reverse Words in a String", "id": 87}, {"status": false, "link": "https://leetcode.com/problems/longest-palindromic-substring/", "title": "Longest Palindromic Substring", "id": 88}, {"status": false, "link": "https://leetcode.com/problems/roman-to-integer/", "title": "Roman to Integer", "id": 89}, {"status": false, "link": "https://leetcode.com/problems/integer-to-roman/", "title": "Integer to Roman", "id": 90}, {"status": false, "link": "https://leetcode.com/problems/implement-strstr/", "title": "Implement strStr", "id": 91}, {"status": false, "link": "https://leetcode.com/problems/string-to-integer-atoi/", "title": "String to Integer", "id": 92}, {"status": false, "link": "https://leetcode.com/problems/longest-common-prefix/", "title": "Longest Common Prefix", "id": 93}, {"status": false, "link": "https://www.geeksforgeeks.org/rabin-karp-algorithm-for-pattern-searching/", "title": "Rabin-Karp Algorithm for Pattern Searching", "id": 94}, {"status": false, "link": "https://www.geeksforgeeks.org/z-algorithm-linear-time-pattern-searching-algorithm/", "title": "Z algorithm (Linear time pattern searching Algorithm)", "id": 95}, {"status": false, "link": "https://www.geeksforgeeks.org/kmp-algorithm-for-pattern-searching/", "title": "KMP Algorithm for Pattern Searching", "id": 96}, {"status": false, "link": "https://www.geeksforgeeks.org/minimum-characters-added-front-make-string-palindrome/", "title": "Minimum characters to be added at front to make string palindrome", "id": 97}, {"status": false, "link": "https://leetcode.com/problems/valid-anagram/", "title": "Valid Anagram", "id": 98}, {"status": false, "link": "https://leetcode.com/problems/count-and-say/", "title": "Count and Say", "id": 99}, {"status": false, "link": "https://leetcode.com/problems/compare-version-numbers/", "title": "Compare Version Numbers", "id": 100}, {"status": false, "link": "https://leetcode.com/problems/binary-tree-inorder-traversal/", "title": "Binary Tree Inorder Traversal", "id": 101}, {"status": false, "link": "https://leetcode.com/problems/binary-tree-preorder-traversal/", "title": "Binary Tree Preorder Traversal", "id": 102}, {"status": false, "link": "https://leetcode.com/problems/binary-tree-postorder-traversal/", "title": "Binary Tree Postorder Traversal", "id": 103}, {"status": false, "link": "https://leetcode.com/problems/binary-tree-right-side-view/", "title": "Binary Tree Right Side View", "id": 104}, {"status": false, "link": "https://practice.geeksforgeeks.org/problems/bottom-view-of-binary-tree/1#", "title": "Bottom View of Binary Tree", "id": 105}, {"status": false, "link": "https://practice.geeksforgeeks.org/problems/top-view-of-binary-tree/1", "title": "Top View of Binary Tree", "id": 106}, {"status": false, "link": "https://leetcode.com/problems/binary-tree-level-order-traversal/", "title": "Binary Tree Level Order Traversal", "id": 107}, {"status": false, "link": "https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/", "title": "Binary Tree Zigzag Level Order Traversal", "id": 108}, {"status": false, "link": "https://leetcode.com/problems/maximum-depth-of-binary-tree/", "title": "Maximum Depth of Binary Tree", "id": 109}, {"status": false, "link": "https://leetcode.com/problems/diameter-of-binary-tree/", "title": "Diameter of Binary Tree", "id": 110}, {"status": false, "link": "https://leetcode.com/problems/balanced-binary-tree/", "title": "Balanced Binary Tree", "id": 111}, {"status": false, "link": "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/", "title": "Lowest Common Ancestor of a Binary Tree", "id": 112}, {"status": false, "link": "https://leetcode.com/problems/same-tree/", "title": "Same Tree", "id": 113}, {"status": false, "link": "https://leetcode.com/problems/binary-tree-maximum-path-sum/", "title": "Binary Tree Maximum Path Sum", "id": 114}, {"status": false, "link": "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/", "title": "Construct Binary Tree from Preorder and Inorder Traversal", "id": 115}, {"status": false, "link": "https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/", "title": "Construct Binary Tree from Inorder and Postorder Traversal", "id": 116}, {"status": false, "link": "https://leetcode.com/problems/symmetric-tree/", "title": "Symmetric Tree", "id": 117}, {"status": false, "link": "https://leetcode.com/problems/flatten-binary-tree-to-linked-list/", "title": "Flatten Binary Tree to Linked List", "id": 118}, {"status": false, "link": "https://leetcode.com/problems/populating-next-right-pointers-in-each-node/", "title": "Populating Next Right Pointers in Each Node", "id": 119}, {"status": false, "link": "https://leetcode.com/problems/search-in-a-binary-search-tree/", "title": "Search in a Binary Search Tree", "id": 120}, {"status": false, "link": "https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/", "title": "Convert Sorted Array to Binary Search Tree", "id": 121}, {"status": false, "link": "https://leetcode.com/problems/validate-binary-search-tree/", "title": "Validate Binary Search Tree", "id": 122}, {"status": false, "link": "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/", "title": "Lowest Common Ancestor of a BST", "id": 123}, {"status": false, "link": "https://practice.geeksforgeeks.org/problems/predecessor-and-successor/1#", "title": "Predecessor and Successor", "id": 124}, {"status": false, "link": "https://www.geeksforgeeks.org/floor-and-ceil-from-a-bst/", "title": "Floor and Ceil from a BST", "id": 125}, {"status": false, "link": "https://leetcode.com/problems/kth-smallest-element-in-a-bst/", "title": "Kth Smallest Element in a BST", "id": 126}, {"status": false, "link": "https://practice.geeksforgeeks.org/problems/kth-largest-element-in-bst/1", "title": "Kth largest element in BST", "id": 127}, {"status": false, "link": "https://leetcode.com/problems/two-sum-iv-input-is-a-bst/", "title": "Two Sum IV - Input is a BST", "id": 128}, {"status": false, "link": "https://leetcode.com/problems/binary-search-tree-iterator/", "title": "Binary Search Tree Iterator", "id": 129}, {"status": false, "link": "https://practice.geeksforgeeks.org/problems/largest-bst/1", "title": "Largest BST", "id": 130}, {"status": false, "link": "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/", "title": "Serialize and Deserialize Binary Tree", "id": 131}, {"status": false, "link": "https://practice.geeksforgeeks.org/problems/binary-tree-to-dll/1#", "title": "Binary Tree to DLL", "id": 132}, {"status": false, "link": "https://leetcode.com/problems/find-median-from-data-stream/", "title": "Find Median from Data Stream", "id": 133}, {"status": false, "link": "https://leetcode.com/problems/kth-largest-element-in-a-stream/", "title": "Kth Largest Element in a Stream", "id": 134}, {"status": false, "link": "https://www.interviewbit.com/problems/distinct-numbers-in-window/", "title": "Distinct Numbers in Window", "id": 135}, {"status": false, "link": "https://leetcode.com/problems/kth-largest-element-in-an-array/", "title": "Kth Largest Element in an Array", "id": 136}, {"status": false, "link": "https://leetcode.com/problems/flood-fill/", "title": "Flood Fill", "id": 137}, {"status": false, "link": "https://leetcode.com/problems/clone-graph/", "title": "Clone Graph", "id": 138}, {"status": false, "link": "https://practice.geeksforgeeks.org/problems/depth-first-traversal-for-a-graph/1#", "title": "DFS of Graph", "id": 139}, {"status": false, "link": "https://practice.geeksforgeeks.org/problems/bfs-traversal-of-graph/1", "title": "BFS of graph", "id": 140}, {"status": false, "link": "https://practice.geeksforgeeks.org/problems/detect-cycle-in-an-undirected-graph/1#", "title": "Detect cycle in an undirected graph", "id": 141}, {"status": false, "link": "https://practice.geeksforgeeks.org/problems/detect-cycle-in-a-directed-graph/1#", "title": "Detect cycle in a directed graph", "id": 142}, {"status": false, "link": "https://practice.geeksforgeeks.org/problems/topological-sort/1#", "title": "Topological sort", "id": 143}, {"status": false, "link": "https://leetcode.com/problems/number-of-islands/", "title": "Number of Islands", "id": 144}, {"status": false, "link": "https://leetcode.com/problems/is-graph-bipartite/", "title": "Is Graph Bipartite?", "id": 145}];

function App() {

  // Howler.volume(1.0);

  const [toDo, setToDo] = useState();
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    if (localStorage.getItem('data')) {
      setToDo(JSON.parse(localStorage.getItem('data')));
      setPercentage(localStorage.getItem('percentage'));
    } else {
      localStorage.setItem('data', JSON.stringify(data));
      localStorage.setItem('percentage', 0);
      setPercentage(0);
      setToDo(JSON.parse(localStorage.getItem('data')));
    }
  }, []);

  const playSound = (src) => {
    const audio = new Audio(src);
    audio.loop =  false;
    audio.play();
  }

  // Add task 

  const resetState = () => {
    localStorage.setItem('data', JSON.stringify(data));
    localStorage.setItem('percentage', 0);
    setPercentage(0);
    setToDo(JSON.parse(localStorage.getItem('data')));
  }

  // Delete task 
  const deleteTask = (id) => {
    let newTasks = toDo.filter( task => task.id !== id)
    setToDo(newTasks);
  }

  // Mark task as done or completed
  const markDone = (task) => {

    const num = (Math.random() * 6 | 0) + 1;
    if (!task.status) playSound(sounds[num-1]);
    const { id } = task

    let newTask = toDo.map( task => {
      if (task.id === id) {
        task.status = !task.status;
      }

      return task;
    });


    const total = newTask.length;
    const done = newTask.filter(task => {
      return task.status;
    });

    console.log(done)
    
    let per = ((done.length/total)*100).toFixed(2);
    
    setPercentage(per);
    setToDo(newTask);
    console.log(percentage);
    localStorage.setItem('percentage', percentage);
    localStorage.setItem('data', JSON.stringify(newTask)); 

  }

  return (
    <div className="container App">

    <br /><br />
    <h2>Practice Questions</h2>
    <br /><br />

    <div className="row">
      <div className="col">
        <ProgressBar 
            now={percentage}
            className="form-control form-control-lg"
        />
      </div>
      <div className="col-auto">
        <button
          onClick={resetState}
          className="btn btn-lg btn-success"
          style={{'background-color': '#1f2833', 'border-color': '#66fcf1'}}
        >Reset</button>
      </div>
    </div>
    <br />

    {toDo && toDo.length ? '' : 'No Tasks...'}

    <ToDo
      toDo={toDo}
      markDone={markDone}
      deleteTask={deleteTask}
    />  

    </div>
  );
}

export default App;
