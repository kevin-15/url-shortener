CREATE DATABASE url_shortener WITH OWNER = barry;

CREATE TABLE "shortener" (
	"id" uuid NOT NULL PRIMARY KEY,
	"original_url" varchar(255) NOT NULL,
	"url_id" varchar(255) NOT NULL UNIQUE,
	"short_url" varchar(255) NOT NULL UNIQUE,
	"custom" boolean NOT NULL,
	"created_at" timestamp with time zone NOT NULL,
	"updated_at" timestamp with time zone NOT NULL
);

INSERT INTO shortener (
	id, original_url, url_id, short_url, custom, created_at, updated_at
) VALUES (
	'4b1c1d2f-648e-49a9-91ee-44e9cff0bb36',
	'https://www.postgresql.org/docs/8.4/uuid-ossp.html',
	'asdasd',
	'asdasdas',
	false,
	now(),
	now()
);