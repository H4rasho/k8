from flask import Flask
import psycopg2
app = Flask(__name__)
conn = psycopg2.connect("dbname=zoo user=postgres password=gdk1JlTM host=pg_db")
cur = conn.cursor()
cur.execute("CREATE TABLE IF NOT EXISTS users (id serial PRIMARY KEY, name varchar);")

@app.route('/')
def getUsers():
    cur.execute("SELECT * FROM users;")
    # Return a list of users in JSON format
    return str(cur.fetchall())


if __name__ == "__main__":
    app.run(debug=True)