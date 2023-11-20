const BASE_URL = './Backend/boardgameController/boardgames';

const fetchData = async (url, method, data = null) => {
  const options = {
    method: method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: data ? JSON.stringify(data) : null,
  };

  try {
    const response = await fetch(`${BASE_URL}/${url}`, options);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  } catch (error) {
    throw new Error('Fetch operation failed:', error.message);
  }
};

const getAllBoardGames = async () => {
  try {
    const data = await fetchData('boardgames', 'GET');
    return data;
  } catch (error) {
    throw error;
  }
};

const getBoardGameByID = async (id) => {
  try {
    const data = await fetchData(`boardgames/${id}`, 'GET');
    return data;
  } catch (error) {
    throw error;
  }
};

const addBoardGame = async (boardgameData) => {
  try {
    await fetchData('boardgames', 'POST', boardgameData);
  } catch (error) {
    throw error;
  }
};

const updateBoardGame = async (id, boardgameData) => {
  try {
    await fetchData(`boardgames/${id}`, 'PUT', boardgameData);
  } catch (error) {
    throw error;
  }
};

const deleteBoardGame = async (id) => {
  try {
    await fetchData(`boardgames/${id}`, 'DELETE');
  } catch (error) {
    throw error;
  }
};

export { getAllBoardGames, getBoardGameByID, addBoardGame, updateBoardGame, deleteBoardGame };
