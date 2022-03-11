CREATE EXTENSION "pgcrypto";

CREATE TABLE "SystemSettings" (
    "name" varchar(128) NOT NULL,
    "timezone" varchar(64) NOT NULL DEFAULT 'Asia/Novosibirsk'
);
ALTER TABLE "SystemSettings" ADD CONSTRAINT "pkSystemSettings" PRIMARY KEY ( "name" );

CREATE OR REPLACE FUNCTION CURRENT_SYSTEM_TIME() RETURNS timestamp without time zone LANGUAGE SQL AS $$
SELECT CURRENT_TIMESTAMP AT TIME ZONE ( SELECT "timezone" FROM "SystemSettings" );
$$;

CREATE TABLE "SystemUser"(
  "username"  varchar( 128 ) NOT NULL,
  "password" varchar( 255 ) NOT NULL,
  "role" varchar( 32 ) NOT NULL,
  "createdTime" timestamp(2) DEFAULT CURRENT_SYSTEM_TIME()
);
ALTER TABLE "SystemUser" ADD CONSTRAINT "pkSystemUser" PRIMARY KEY ( "username" );

CREATE TABLE "Session"(
  "username"  varchar( 128 ) NOT NULL,
  "token" varchar( 64 ) NOT NULL,
  "createdTime" timestamp(2) DEFAULT CURRENT_SYSTEM_TIME()
);
ALTER TABLE "Session" ADD CONSTRAINT "pkSession" PRIMARY KEY ( "token" );
ALTER TABLE "Session" ADD CONSTRAINT "fkSessionUserUsername" FOREIGN KEY ( "username" ) REFERENCES  "SystemUser"( "username" ) ON DELETE CASCADE;

INSERT INTO "SystemSettings"(name) VALUES ('web-soft-settings');
