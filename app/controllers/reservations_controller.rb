class ReservationsController < ApplicationController
  def show
    @reservations = Reservation.all
  end
end