import os
import sys

from mobile_app_react_native.config import Config
from mobile_app_react_native.logger import Logger
from mobile_app_react_native.services import APIService

class MobileAppReactNative:
    def __init__(self):
        self.config = Config()
        self.logger = Logger()
        self.api_service = APIService(self.config)

    def run(self):
        try:
            self.logger.info("Mobile App React Native started")
            self.api_service.start()
        except Exception as e:
            self.logger.error(f"An error occurred: {e}")
            sys.exit(1)

if __name__ == "__main__":
    app = MobileAppReactNative()
    app.run()