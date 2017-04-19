# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170419181606) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "employer_profiles", force: :cascade do |t|
    t.string   "company_name"
    t.string   "website"
    t.string   "contact_name"
    t.string   "contact_phone"
    t.string   "contact_email"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
    t.integer  "user_id"
    t.index ["user_id"], name: "index_employer_profiles_on_user_id", using: :btree
  end

  create_table "jobs", force: :cascade do |t|
    t.string   "title"
    t.text     "description"
    t.boolean  "transportation"
    t.boolean  "active",              default: true
    t.integer  "employer_profile_id"
    t.integer  "location_id"
    t.datetime "created_at",                         null: false
    t.datetime "updated_at",                         null: false
    t.index ["employer_profile_id"], name: "index_jobs_on_employer_profile_id", using: :btree
    t.index ["location_id"], name: "index_jobs_on_location_id", using: :btree
  end

  create_table "locations", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "messages", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "seeker_profiles", force: :cascade do |t|
    t.string   "first_name"
    t.string   "last_name"
    t.string   "email"
    t.string   "phone"
    t.datetime "created_at",                        null: false
    t.datetime "updated_at",                        null: false
    t.integer  "user_id"
    t.text     "education"
    t.text     "work_history"
    t.text     "interests"
    t.string   "preferred_contact"
    t.boolean  "text_me",           default: false
    t.boolean  "email_me",          default: false
    t.index ["user_id"], name: "index_seeker_profiles_on_user_id", using: :btree
  end

  create_table "skillings", force: :cascade do |t|
    t.integer  "skill_id"
    t.integer  "skillable_id"
    t.string   "skillable_type"
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
    t.index ["skill_id"], name: "index_skillings_on_skill_id", using: :btree
    t.index ["skillable_id", "skillable_type"], name: "index_skillings_on_skillable_id_and_skillable_type", using: :btree
  end

  create_table "skills", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "username"
    t.string   "password_digest"
    t.text     "about"
    t.datetime "created_at",                      null: false
    t.datetime "updated_at",                      null: false
    t.integer  "location_id"
    t.string   "token"
    t.string   "avatar"
    t.boolean  "admin",           default: false
    t.datetime "reset_sent_at"
    t.index ["location_id"], name: "index_users_on_location_id", using: :btree
  end

  add_foreign_key "employer_profiles", "users"
  add_foreign_key "jobs", "employer_profiles"
  add_foreign_key "jobs", "locations"
  add_foreign_key "seeker_profiles", "users"
  add_foreign_key "skillings", "skills"
  add_foreign_key "users", "locations"
end
