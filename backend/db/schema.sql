create table if not exists caterers (
    id serial primary key,
    username text not null unique,
    password text not null,
    company_name text not null,
    address text not null,
    city text not null,
    state text not null,
    zip integer not null,
    company_phone integer not null,
    company_email text not null unique,
    website text,
    contact_name text not null,
    contact_phone integer,
    contact_email text unique
);

create table if not exists hosts (
    id serial primary key,
    username text not null unique,
    password text not null,
    first_name text not null,
    last_name text not null,
    address text not null,
    city text not null,
    state text not null,
    zip integer not null,
    phone integer not null,
    email text not null unique 
);

create table if not exists staff (
    id serial primary key,
    username text not null unique,
    password text not null,
    first_name text not null,
    middle_name text not null,
    last_name text not null,
    address text not null,
    city text not null,
    state text not null,
    zip integer not null,
    phone integer not null,
    email text not null unique,
    emergency_phone integer not null,
    dob date not null,
    -- 1999-01-08
    start_date date not null,
    end_date date, 
    is_active boolean,
    us_citizen boolean,
    prior_conviction boolean,
    w2 boolean,
    direct_deposit boolean,
    ss_copy boolean,
    dl_copy boolean,
    dl_num integer,
    dl_exp date, 
    tabc boolean,
    tabc_exp date,
    salary integer,
    waitstaff boolean,
    bartender boolean,
    valet boolean,
    model boolean,
    manager boolean,
    has_eton boolean,
    has_bistro boolean,
    has_shoes boolean,
    has_belt boolean,
    has_tie boolean,
    has_bowtie boolean,
    has_cufflinks boolean,
    has_pants boolean,
    has_white_shirt boolean,
    has_black_shirt boolean,
    has_white_jacket boolean,
    has_black_jacket boolean,
    has_cumberbun boolean,
    has_apron boolean,
    has_bar_tool boolean,
    has_bar_set boolean
);

create table if not exists events (
    id serial primary key,
    host_id integer not null references hosts,
    caterer_id integer references caterers, 
    staff_lead_id integer references staff,
    event_title text not null,
    event_date date not null,
    event_start time not null,
    event_end time not null,
    -- 16:00
    event_address text not null,
    event_city text not null,
    event_state text not null,
    event_zip integer not null,
    num_guests integer,
    num_waitstaff integer,
    num_bartenders integer,
    num_valet integer,
    num_models integer,
    attire text
);

create table if not exists staff_events (
    staff_id integer not null references staff,
    event_id integer not null references events
);

create table if not exists caterers_staff (
    caterer_id integer not null references caterers,
    staff_id integer not null references staff
);