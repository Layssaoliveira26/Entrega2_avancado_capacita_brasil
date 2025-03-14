--
-- PostgreSQL database dump
--

-- Dumped from database version 17.2
-- Dumped by pg_dump version 17.2

-- Started on 2025-03-10 20:48:16

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 219 (class 1259 OID 16458)
-- Name: Aluno; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Aluno" (
    id integer NOT NULL,
    nome character varying(150) NOT NULL
);


ALTER TABLE public."Aluno" OWNER TO postgres;

--
-- TOC entry 218 (class 1259 OID 16457)
-- Name: Aluno_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Aluno_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Aluno_id_seq" OWNER TO postgres;

--
-- TOC entry 4880 (class 0 OID 0)
-- Dependencies: 218
-- Name: Aluno_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Aluno_id_seq" OWNED BY public."Aluno".id;


--
-- TOC entry 223 (class 1259 OID 16472)
-- Name: Boletim; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Boletim" (
    id integer NOT NULL,
    nota double precision NOT NULL,
    "alunoId" integer NOT NULL
);


ALTER TABLE public."Boletim" OWNER TO postgres;

--
-- TOC entry 222 (class 1259 OID 16471)
-- Name: Boletim_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Boletim_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Boletim_id_seq" OWNER TO postgres;

--
-- TOC entry 4881 (class 0 OID 0)
-- Dependencies: 222
-- Name: Boletim_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Boletim_id_seq" OWNED BY public."Boletim".id;


--
-- TOC entry 221 (class 1259 OID 16465)
-- Name: Professor; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Professor" (
    id integer NOT NULL,
    nome character varying(100) NOT NULL,
    disciplina character varying(100) NOT NULL
);


ALTER TABLE public."Professor" OWNER TO postgres;

--
-- TOC entry 220 (class 1259 OID 16464)
-- Name: Professor_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Professor_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Professor_id_seq" OWNER TO postgres;

--
-- TOC entry 4882 (class 0 OID 0)
-- Dependencies: 220
-- Name: Professor_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Professor_id_seq" OWNED BY public."Professor".id;


--
-- TOC entry 217 (class 1259 OID 16446)
-- Name: _prisma_migrations; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public._prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);


ALTER TABLE public._prisma_migrations OWNER TO postgres;

--
-- TOC entry 4711 (class 2604 OID 16461)
-- Name: Aluno id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Aluno" ALTER COLUMN id SET DEFAULT nextval('public."Aluno_id_seq"'::regclass);


--
-- TOC entry 4713 (class 2604 OID 16475)
-- Name: Boletim id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Boletim" ALTER COLUMN id SET DEFAULT nextval('public."Boletim_id_seq"'::regclass);


--
-- TOC entry 4712 (class 2604 OID 16468)
-- Name: Professor id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Professor" ALTER COLUMN id SET DEFAULT nextval('public."Professor_id_seq"'::regclass);


--
-- TOC entry 4870 (class 0 OID 16458)
-- Dependencies: 219
-- Data for Name: Aluno; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Aluno" (id, nome) FROM stdin;
1	Layssa
4	Layssa
5	Edivanir
6	Layssa
7	Layssa
8	Layssa
9	Layssa
10	Gio
12	Beth
3	Mayke
\.


--
-- TOC entry 4874 (class 0 OID 16472)
-- Dependencies: 223
-- Data for Name: Boletim; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Boletim" (id, nota, "alunoId") FROM stdin;
1	10	1
8	10	3
9	8	4
2	5.5	5
\.


--
-- TOC entry 4872 (class 0 OID 16465)
-- Dependencies: 221
-- Data for Name: Professor; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Professor" (id, nome, disciplina) FROM stdin;
1	Criston	probabilidade
2	Ismaily	Matemática Discreta
3	Rainara	processos de software
5	Marcos	POO
4	Cristiano	arquitetura
\.


--
-- TOC entry 4868 (class 0 OID 16446)
-- Dependencies: 217
-- Data for Name: _prisma_migrations; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
5b3b5c42-cafb-4a9e-8ade-680f487d49e0	ee112f5451359f820a25dd849b4b9df956d7ef76303524e360f22e9cd43a9820	2025-03-08 07:34:29.810862-03	20250308103429_init	\N	\N	2025-03-08 07:34:29.788052-03	1
\.


--
-- TOC entry 4883 (class 0 OID 0)
-- Dependencies: 218
-- Name: Aluno_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Aluno_id_seq"', 12, true);


--
-- TOC entry 4884 (class 0 OID 0)
-- Dependencies: 222
-- Name: Boletim_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Boletim_id_seq"', 10, true);


--
-- TOC entry 4885 (class 0 OID 0)
-- Dependencies: 220
-- Name: Professor_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Professor_id_seq"', 6, true);


--
-- TOC entry 4717 (class 2606 OID 16463)
-- Name: Aluno Aluno_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Aluno"
    ADD CONSTRAINT "Aluno_pkey" PRIMARY KEY (id);


--
-- TOC entry 4721 (class 2606 OID 16477)
-- Name: Boletim Boletim_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Boletim"
    ADD CONSTRAINT "Boletim_pkey" PRIMARY KEY (id);


--
-- TOC entry 4719 (class 2606 OID 16470)
-- Name: Professor Professor_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Professor"
    ADD CONSTRAINT "Professor_pkey" PRIMARY KEY (id);


--
-- TOC entry 4715 (class 2606 OID 16454)
-- Name: _prisma_migrations _prisma_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);


--
-- TOC entry 4722 (class 2606 OID 16478)
-- Name: Boletim Boletim_alunoId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Boletim"
    ADD CONSTRAINT "Boletim_alunoId_fkey" FOREIGN KEY ("alunoId") REFERENCES public."Aluno"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


-- Completed on 2025-03-10 20:48:17

--
-- PostgreSQL database dump complete
--

