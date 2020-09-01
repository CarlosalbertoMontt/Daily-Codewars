//If you finish this kata, you can try Insane Coloured Triangles by Bubbler, which is a much harder version of this one.

//A coloured triangle is created from a row of colours, each of which is red, green or blue. Successive rows, each containing one fewer colour than the last, are generated by considering the two touching colours in the previous row. If these colours are identical, the same colour is used in the new row. If they are different, the missing colour is used in the new row. This is continued until the final row, with only a single colour, is generated.

//The different possibilities are:


function triangle(row) {
  while (row.length > 1) {
    let newRow = ''

    for (let i = 0; i < row.length - 1; i += 1) {
      const lColor = row[i]
      const rColor = row[i + 1]

      newRow += getLastColor(lColor, rColor)
    }

    row = newRow
  }

  return row
}

function getLastColor(firstColor, secondColor) {
  if (firstColor === secondColor) {
    return firstColor
  }

  return 'RGB'.replace(firstColor, '').replace(secondColor, '')
}
