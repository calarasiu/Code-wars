class GamesController < ApplicationController
  def new 
    @letters = generate_grid
  end
  def score 
    raise
  end
  def generate_grid
    Array.new(10) { ('A'..'Z').to_a.sample }
  end
end
