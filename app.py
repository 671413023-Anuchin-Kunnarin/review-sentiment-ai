import os
import requests
from flask import Flask, render_template, request
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)

API_KEY = os.getenv("AIFORTHAI_API_KEY")
API_URL = "https://api.aiforthai.in.th/ssense"


@app.route("/", methods=["GET", "POST"])
def index():
    result = None
    review = ""
    error = None

    if request.method == "POST":
        review = request.form.get("review", "").strip()

        if not review:
            error = "กรุณากรอกข้อความรีวิวสินค้า"
        else:
            try:
                headers = {
                    "Apikey": API_KEY
                }

                params = {
                    "text": review
                }

                response = requests.get(
                    API_URL,
                    headers=headers,
                    params=params,
                    timeout=30
                )

                response.raise_for_status()
                data = response.json()

                sentiment = data.get("sentiment", {})
                polarity = sentiment.get("polarity", "").strip()
                score = sentiment.get("score", "0")

                if polarity == "positive":
                    thai_result = "เชิงบวก"
                    emoji = "😊"
                elif polarity == "negative":
                    thai_result = "เชิงลบ"
                    emoji = "😞"
                else:
                    polarity = "Neutral"
                    thai_result = "เป็นกลาง"
                    emoji = "😐"

                result = {
                    "polarity": polarity,
                    "thai_result": thai_result,
                    "score": score,
                    "emoji": emoji
                }

            except requests.RequestException:
                error = "ไม่สามารถเชื่อมต่อ AIForThai ได้ กรุณาลองใหม่อีกครั้ง"

            except Exception:
                error = "เกิดข้อผิดพลาดในการวิเคราะห์ข้อมูล"

    return render_template(
        "index.html",
        result=result,
        review=review,
        error=error
    )


if __name__ == "__main__":
    app.run(debug=True)

