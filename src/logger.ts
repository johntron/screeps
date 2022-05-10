enum Level {
  error = "error",
  info = "info",
  debug = "debug",
}
const logAtLevel = (level: Level) =>
  (message: string) => console.log(`${level}: ${message}`);

const logger = {
  error: logAtLevel(Level.error),
  info: logAtLevel(Level.info),
  debug: logAtLevel(Level.debug),
};

export { logger };
