class CreateRepos < ActiveRecord::Migration[5.0]
  def change
    create_table :repos do |t|
      t.string :repo_id
      t.integer :star_level
      t.string :tag

      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
