class AddNameToUsernames < ActiveRecord::Migration[5.2]
  def change
    add_column :usernames, :name, :string
  end
end
