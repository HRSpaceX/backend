FROM python:3.11

WORKDIR /app

RUN pip install gunicorn==20.1.0

COPY ./requirements.txt .

RUN pip3 install --upgrade pip

RUN pip3 install -r ./requirements.txt --no-cache-dir

RUN apt-get update && apt-get install -y nano

COPY . .

CMD ["gunicorn", "--bind", "0.0.0.0:8000", "hrspace.wsgi:application"]

