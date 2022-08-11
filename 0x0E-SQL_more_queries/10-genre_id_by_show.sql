-- Import the database dump from hbtn_0d_tvshows to your MySQL server
-- A  script that lists all shows contained in hbtn_0d_tvshows that have at least one genre linked.
SELECT tv_shows.title, tv_show_genres.genre_id
FROM tv_shows tvs
INNER JOIN tv_show_genres tvg
ON tvg.show_id = tvs.id
ORDER BY tvs.title, tvg.genre_id ASC;