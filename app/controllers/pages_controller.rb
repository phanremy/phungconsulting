class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [:home, :index, :activites, :references, :evenements, :documents, :about_us, :contact]

  def home
  end

  def index
  end

  def activites
  end

  def references
  end

  def evenements
  end

  def documents
  end

  def about_us
  end

  def contact
  end
end
