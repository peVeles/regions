CREATE TABLE public.regions
(
    path ltree NOT NULL,
    id bigserial NOT NULL,
    name text NOT NULL,
    PRIMARY KEY (id)
);

CREATE INDEX path_gist_idx ON test USING GIST (path);
CREATE INDEX path_idx ON test USING BTREE (path);
