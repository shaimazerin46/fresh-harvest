export async function GET(request) {
  return Response.json({
    success: true,
    message: "Categories retrieved successfully!",
    data: [
      {
        id: "6751516f9c52879c1fde6558",
        categoryName: "fruits",
        createdAt: "2024-12-05T07:08:31.499Z",
        updatedAt: "2024-12-05T07:08:31.499Z"
      },
      {
        id: "6751569e0e539396658e60a9",
        categoryName: "Salad",
        createdAt: "2024-12-05T07:30:38.699Z",
        updatedAt: "2024-12-05T07:30:38.699Z"
      },
      {
        id: "6751584feaeaa5cc21bbe21b",
        categoryName: "Vegetable",
        createdAt: "2024-12-05T07:37:51.344Z",
        updatedAt: "2024-12-05T07:37:51.344Z"
      },
      {
        id: "6786bb84c64b5838b8a572d2",
        categoryName: "Drinksss",
        createdAt: "2025-01-14T19:31:16.329Z",
        updatedAt: "2025-01-14T19:31:16.329Z"
      }
    ]
  });
}
