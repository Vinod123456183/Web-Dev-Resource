#include <vector>
#include <iostream>

#define pd push_back

using namespace std; // Use the standard namespace for convenience

class Solution
{
public:
    void F(vector<vector<int>> &graph, int n, vector<int> &temp, vector<vector<int>> &ans)
    {
        // If the current node is the target node, add the path to the answer
        if (n == graph.size() - 1)
        {
            ans.pd(temp);
            return; // Return as we've found a valid path
        }

        // Explore all the adjacent nodes
        for (int i = 0; i < graph[n].size(); i++)
        {
            // Add the adjacent node to the current path
            temp.pd(graph[n][i]);
            // Recursively explore from the adjacent node
            F(graph, graph[n][i], temp, ans);
            // Backtrack: remove the last node from the path
            temp.pop_back();
        }
    }

    vector<vector<int>> allPathsSourceTarget(vector<vector<int>> &graph)
    {
        vector<vector<int>> ans;
        vector<int> temp;
        temp.pd(0);             // Start path with the source node
        F(graph, 0, temp, ans); // Start DFS from the source node
        return ans;
    }
};

int main()
{
    // Example graph represented as an adjacency list
    vector<vector<int>> graph = {
        {1, 2}, // Node 0 connects to Node 1 and Node 2
        {3},    // Node 1 connects to Node 3
        {3},    // Node 2 connects to Node 3
        {}      // Node 3 is the target node with no outgoing edges
    };

    Solution solution;
    vector<vector<int>> paths = solution.allPathsSourceTarget(graph);

    // Print all paths from source to target
    for (const auto &path : paths)
    {
        for (int node : path)
        {
            cout << node << " ";
        }
        cout << endl;
    }

    return 0;
}
