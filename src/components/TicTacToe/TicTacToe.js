import { Box } from "./Box";

export const TickTacToe = () => {
  const tickTacToe = [
    [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 }
    ],
    [
      { id: 4, value: 0 },
      { id: 5, value: 0 },
      { id: 6, value: 0 }
    ],
    [
      { id: 7, value: 0 },
      { id: 8, value: 0 },
      { id: 9, value: 0 }
    ]
  ];

  const onClickBox = (posi, posj) => {
    console.log(posi, posj);
  };

  const createBoard = (tickTacToe) => {
    return (
      <>
        {tickTacToe.map((tickTacToeRow, i) => {
          return (
            <div key={i} style={{ height: 100 }}>
              {tickTacToeRow.map((el, j) => (
                <Box
                  key={el.id}
                  onClickBox={onClickBox}
                  value={el.value}
                  i={i}
                  j={j}
                ></Box>
              ))}
            </div>
          );
        })}
      </>
    );
  };

  return (
    <>
      {createBoard(tickTacToe)}
      <p>
        player 1 has <span style={{ color: "red" }}>X</span>
      </p>
      <p>
        player 2 has <span style={{ color: "pink" }}>O</span>
      </p>
    </>
  );
};
