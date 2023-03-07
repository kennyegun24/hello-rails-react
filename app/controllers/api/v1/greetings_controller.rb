class Api::V1::GreetingsController < ApplicationController
  def index
    render json: Greeting.find(rand(1..5))
  end
end
