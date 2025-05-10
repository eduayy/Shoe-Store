-- TABLE OF CLOTHES
CREATE TABLE clothes(
	idClothe SERIAL PRIMARY KEY,
	clotheImage TEXT NOT NULL,
	clotheName VARCHAR(20) NOT NULL,
	clotheType VARCHAR (25) NOT NULL,
	clotheColor VARCHAR (10) NOT NULL,
	clotheDescription VARCHAR (200),
	clotheSize VARCHAR(3) CHECK (clotheSize IN ('XS', 'S', 'M', 'G', 'XL')),
	clothePrice NUMERIC(4, 2) NOT NULL
);

-- DATA OF CLOTHES
INSERT INTO clothes (clotheImage, clotheName, clotheType, clotheColor, clotheDescription, clotheSize, clothePrice)
VALUES
('https://images.pexels.com/photos/1557843/pexels-photo-1557843.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'Skinny Jeans', 'Pants', 'Blue', 'Slim-fit jeans with a modern style.', 'L', 24.50),
('https://images.pexels.com/photos/6995874/pexels-photo-6995874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'Hoodie Sweatshirt', 'Sweatshirt', 'Gray', 'Sweatshirt with hood and front pocket.', 'L', 29.99),
('https://images.pexels.com/photos/9410424/pexels-photo-9410424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'Pleated Skirt', 'Skirt', 'Red', 'Short pleated skirt with a youthful design.', 'S', 18.75),
('https://images.pexels.com/photos/31963448/pexels-photo-31963448/free-photo-of-woman-posing-in-front-of-scenic-lake-temple.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'Elegant Blouse', 'Blouse', 'White', 'Blouse with lace details for formal events.', 'M', 22.40),
('https://images.pexels.com/photos/17895319/pexels-photo-17895319/free-photo-of-blonde-stretching-in-sportswear.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'Sport Shorts', 'Shorts', 'Green', 'Quick-dry shorts ideal for running.', 'S', 15.30),
('https://images.pexels.com/photos/6089635/pexels-photo-6089635.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'Denim Jacket', 'Jacket', 'Blue', 'Classic cut denim jacket.', 'XL', 35.00),
('https://images.pexels.com/photos/11947050/pexels-photo-11947050.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'Sports Top', 'Top', 'Purple', 'Medium-support top for workouts.', 'XS', 14.20),
('https://images.pexels.com/photos/30371862/pexels-photo-30371862/free-photo-of-young-woman-in-floral-dress-at-traditional-doorway.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'Floral Dress', 'Dress', 'Pink', 'Lightweight dress with floral print.', 'M', 27.99),
('https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'Formal Shirt', 'Shirt', 'Light Blue', 'Long sleeve shirt perfect for the office.', 'L', 19.80);
