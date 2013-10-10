class CreateQuotes < ActiveRecord::Migration
  def change
    create_table :quotes do |t|
      t.references :user, index: true
      t.text :body
      t.string :author
      t.integer :upvotes, default: 0
      t.boolean :published, default: true

      t.timestamps
    end
  end
end
