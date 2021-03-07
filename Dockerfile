FROM cypress/included:6.6.0
RUN mkdir /app
WORKDIR /app
COPY . /app
RUN npm install
RUN ["npm","run","cy.headless"]