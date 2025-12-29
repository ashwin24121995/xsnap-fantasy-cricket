-- XSNAP Fantasy Cricket Database Tables
-- Create all required tables for the fantasy cricket platform

-- Users table
CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(320) NOT NULL UNIQUE,
  passwordHash VARCHAR(255) NOT NULL,
  name VARCHAR(255) NOT NULL,
  age INT NOT NULL,
  state VARCHAR(100) NOT NULL,
  isAgeVerified BOOLEAN DEFAULT FALSE NOT NULL,
  acceptedTerms BOOLEAN DEFAULT FALSE NOT NULL,
  language ENUM('en', 'hi', 'ta', 'te', 'mr') DEFAULT 'en' NOT NULL,
  role ENUM('user', 'admin') DEFAULT 'user' NOT NULL,
  profilePicture TEXT,
  phone VARCHAR(20),
  totalPoints INT DEFAULT 0 NOT NULL,
  totalTeams INT DEFAULT 0 NOT NULL,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP NOT NULL,
  lastSignedIn TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
  emailVerified BOOLEAN DEFAULT FALSE NOT NULL,
  INDEX email_idx (email)
);

-- Password reset tokens
CREATE TABLE IF NOT EXISTS passwordResetTokens (
  id INT AUTO_INCREMENT PRIMARY KEY,
  userId INT NOT NULL,
  token VARCHAR(255) NOT NULL UNIQUE,
  expiresAt TIMESTAMP NOT NULL,
  used BOOLEAN DEFAULT FALSE NOT NULL,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
  INDEX token_idx (token),
  INDEX user_idx (userId)
);

-- Matches table
CREATE TABLE IF NOT EXISTS matches (
  id INT AUTO_INCREMENT PRIMARY KEY,
  apiMatchId VARCHAR(100) NOT NULL UNIQUE,
  name VARCHAR(500) NOT NULL,
  matchType VARCHAR(50) NOT NULL,
  venue VARCHAR(255) NOT NULL,
  matchDate TIMESTAMP NOT NULL,
  status TEXT NOT NULL,
  teams TEXT NOT NULL,
  score TEXT,
  seriesId VARCHAR(100),
  fantasyEnabled BOOLEAN DEFAULT FALSE NOT NULL,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP NOT NULL,
  INDEX api_match_id_idx (apiMatchId),
  INDEX match_date_idx (matchDate),
  INDEX fantasy_enabled_idx (fantasyEnabled)
);

-- Players table
CREATE TABLE IF NOT EXISTS players (
  id INT AUTO_INCREMENT PRIMARY KEY,
  apiPlayerId VARCHAR(100) NOT NULL UNIQUE,
  name VARCHAR(255) NOT NULL,
  country VARCHAR(100) NOT NULL,
  role VARCHAR(50) DEFAULT 'All-rounder' NOT NULL,
  image TEXT,
  credits DECIMAL(10, 1) DEFAULT 9.0 NOT NULL,
  points INT DEFAULT 0 NOT NULL,
  matchesPlayed INT DEFAULT 0 NOT NULL,
  runs INT DEFAULT 0 NOT NULL,
  wickets INT DEFAULT 0 NOT NULL,
  catches INT DEFAULT 0 NOT NULL,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP NOT NULL,
  INDEX api_player_id_idx (apiPlayerId),
  INDEX country_idx (country)
);

-- Teams table
CREATE TABLE IF NOT EXISTS teams (
  id INT AUTO_INCREMENT PRIMARY KEY,
  userId INT NOT NULL,
  matchId INT NOT NULL,
  teamName VARCHAR(255) NOT NULL,
  captainId INT NOT NULL,
  viceCaptainId INT NOT NULL,
  totalCredits DECIMAL(10, 2) DEFAULT 100.00 NOT NULL,
  usedCredits DECIMAL(10, 2) DEFAULT 0.00 NOT NULL,
  totalPoints INT DEFAULT 0 NOT NULL,
  `rank` INT,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP NOT NULL,
  INDEX user_idx (userId),
  INDEX match_idx (matchId),
  INDEX rank_idx (`rank`)
);

-- Team Players junction table
CREATE TABLE IF NOT EXISTS teamPlayers (
  id INT AUTO_INCREMENT PRIMARY KEY,
  teamId INT NOT NULL,
  playerId INT NOT NULL,
  pointsEarned INT DEFAULT 0 NOT NULL,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
  INDEX team_idx (teamId),
  INDEX player_idx (playerId)
);

-- Blog posts
CREATE TABLE IF NOT EXISTS blogPosts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(500) NOT NULL,
  slug VARCHAR(500) NOT NULL UNIQUE,
  excerpt TEXT NOT NULL,
  content TEXT NOT NULL,
  featuredImage TEXT,
  authorId INT NOT NULL,
  category VARCHAR(100),
  tags TEXT,
  published BOOLEAN DEFAULT FALSE NOT NULL,
  publishedAt TIMESTAMP NULL,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP NOT NULL,
  INDEX slug_idx (slug),
  INDEX author_idx (authorId),
  INDEX published_idx (published)
);

-- Contact form submissions
CREATE TABLE IF NOT EXISTS contactSubmissions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(320) NOT NULL,
  phone VARCHAR(20),
  subject VARCHAR(500) NOT NULL,
  message TEXT NOT NULL,
  status ENUM('new', 'read', 'responded') DEFAULT 'new' NOT NULL,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
  INDEX status_idx (status),
  INDEX email_idx (email)
);
