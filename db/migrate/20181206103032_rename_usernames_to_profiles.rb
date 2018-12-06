class RenameUsernamesToProfiles < ActiveRecord::Migration[5.2]
  def self.up
    rename_table :usernames, :profiles
  end
end
