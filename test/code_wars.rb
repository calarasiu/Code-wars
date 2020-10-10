def solve(arr) 
  #..
  p arr.reduce {|x, y| x.product(y).map {|z| z.reduce :*}}.max
  
end

  solve([[5, 2],[1, 4]])