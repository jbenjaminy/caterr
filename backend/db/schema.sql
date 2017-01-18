create table if not exists admins (
    id serial primary key,
    username text not null unique,
    password text not null,
    first_name text not null,
    last_name text not null,
    phone text not null,
    email text not null unique,
    has_waitstaff boolean not null,
    has_bartenders boolean not null,
    has_valets boolean not null,
    has_models boolean not null
);

create table if not exists hosts (
    id serial primary key,
    username text not null unique,
    password text not null,
    company_name text not null,
    address text not null,
    city text not null,
    state text not null,
    zip integer not null,
    contact_first_name text not null,
    contact_last_name text not null,
    contact_phone text not null,
    contact_email text not null unique,
    company_phone text,
    company_email text unique,
    website text
);

create table if not exists staff_contact (
    id serial primary key,
    email text not null unique,
    username text not null unique,
    password text not null,
    first_name text not null,
    middle_name text not null,
    last_name text not null,
    address text not null,
    city text not null,
    state text not null,
    zip text not null,
    phone text not null
);

create table if not exists staff_application (
    id serial primary key,
    staff_id integer not null references staff_contact,
-- personal details
    dob date not null,
    -- 1999-01-08
    emergency_phone text not null,
    us_citizen boolean,
    prior_conviction boolean,
    ss_num text not null,
    dl_num text not null,
    dl_exp date not null,
    referred_by text,
-- position details
    waitstaff boolean,
    bartender boolean,
    valet boolean,
    model boolean,
    part_time boolean,
    full_time boolean,
    seasonal boolean,
    desired_pay_rate integer,
    desired_start_date date,
-- work history / related experience
    was_prev_empl boolean,
    prev_position text,
    prev_pay_rate integer,
    prev_start_date date,
    prev_end_date date,
    num_years_exp integer,
    tabc_certified boolean,
    tabc_exp date,
    past_work_1 text not null,
    past_title_1 text not null,
    past_duration_1 integer not null,
    past_work_2 text,
    past_title_2 text,
    past_duration_2 integer,
    past_work_3 text,
    past_title_3 text,
    past_duration_3 integer,
    ref_name_1 text not null,
    ref_relation_1 text not null,
    ref_phone_1 text not null,
    ref_name_2 text,
    ref_relation_2 text,
    ref_phone_2 text,
    ref_name_3 text,
    ref_relation_3 text,
    ref_phone_3 text
);

create table if not exists staff_documents (
    id serial primary key,
    staff_id integer not null references staff_contact,
-- store images in Amazon S3
    ss_on_file boolean,
    ss_url text,
    dl_on_file boolean,
    dl_url text,
    resume_on_file boolean,
    resume_url text,
    tabc_on_file boolean,
    tabc_url text,
    i9_on_file boolean,
    i9_url text,
    w4_on_file boolean,
    w4_url text,
    non_compete_on_file boolean,
    non_compete_url text,
    conduct_agmt_on_file boolean,
    conduct_agmt_url text
);

create table if not exists staff_payroll (
    id serial primary key,
    staff_id integer not null references staff_contact,
    pay_rate integer not null,
    pay_period_hours integer,
    overtime_hours integer,
    all_time_hours integer,
    direct_deposit boolean,
    bank text,
    acct_type text,
    acct_num text,
    routing_num text
);

create table if not exists staff_status (
    id serial primary key,
    staff_id integer not null references staff_contact,
    is_active boolean,
    is_waitstaff boolean,
    is_bartender boolean,
    is_valet boolean,
    is_model boolean,
    is_manager boolean,
    -- managers -- staff with extra access
        -- can see all events, who has not replied, who's been offered, phone number and contact info
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

create table if not exists staff_availability (
    id serial primary key,
    staff_id integer not null references staff_contact,
    date_unavailable date
);

create table if not exists events (
    id serial primary key,
    host_id integer not null references hosts,
    event_title text not null,
    event_date date not null,
    event_start time not null,
    event_end time not null,
    -- 16:00
    event_address text not null,
    event_city text not null,
    event_state text not null,
    event_zip integer not null,
    num_guests integer not null,
    notes text,
    -- suggest how many of these are necessary
    -- either scott calls back with a quote or they can see quote being generated with selections
    num_waitstaff integer,
    num_bartenders integer,
    num_valet integer,
    attire text
);

create table if not exists events_staff (
    event_id integer not null references events,
    staff_id integer not null references staff_contact,
    responded boolean,
    accepted boolean
    -- timestamp
);

create table if not exists hosts_staff (
    caterer_id integer not null references hosts,
    staff_id integer not null references staff_contact,
    preferred boolean,
    uneligable boolean,
    notes text
    -- separate positive and negative feedback and post positive on their dashboard 
);
-- messages