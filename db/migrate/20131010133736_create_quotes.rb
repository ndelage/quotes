class CreateQuotes < ActiveRecord::Migration
  def change
    create_table :quotes do |t|
      t.references :user, index: true
      t.text :body
      t.string :author

      t.timestamps
    end
  end
end
