SELECT * from users;
SELECT * from roles;
SELECT * from user_roles;
ALTER TABLE users 
DROP COLUMN role_id;

ALTER TABLE user_roles
ADD CONSTRAINT fk_user_id FOREIGN KEY(user_id) REFERENCES users(id);

ALTER TABLE user_roles
ADD CONSTRAINT fk_role_id FOREIGN KEY(role_id) REFERENCES roles(id);


