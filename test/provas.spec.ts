import pactum from "pactum";
import { StatusCodes } from "http-status-codes";
import { SimpleReporter } from "../simple-reporter";

describe("API Reqres com API Key", () => {
  const p = pactum;
  const rep = SimpleReporter;
  const baseUrl = "https://reqres.in/api";
  const apiKey = "reqres-free-v1";

  p.request.setDefaultTimeout(10000);

  beforeAll(() => p.reporter.add(rep));
  afterAll(() => p.reporter.end());

  describe("USUÁRIOS", () => {
    it("Listar Usuários - Paginado", async () => {
      await p
        .spec()
        .get(`${baseUrl}/users?page=1`)
        .withHeaders("x-api-key", apiKey)
        .expectStatus(StatusCodes.OK)
        .expectJsonLike({
          page: 1
        });
    });


     it("Obter Usuário por ID", async () => {
      await p
        .spec()
        .get(`${baseUrl}/users/2`)
        .withHeaders("x-api-key", apiKey)
        .expectStatus(StatusCodes.OK)
        .expectJsonLike({
          data: {
            id: 2,
            email: "janet.weaver@reqres.in"
          }
        });
    });

    it("Atualizar Usuário (PUT)", async () => {
      await p
        .spec()
        .put(`${baseUrl}/users/2`)
        .withHeaders("x-api-key", apiKey)
        .withJson({
          first_name: "joao",
          last_name: "daniel"
        })
        .expectStatus(StatusCodes.OK)
        .expectJsonLike({
          first_name: "joao",
          last_name: "daniel"
        });
    });

    it("Atualizar Usuário (PATCH)", async () => {
      await p
        .spec()
        .patch(`${baseUrl}/users/2`)
        .withHeaders("x-api-key", apiKey)
        .withJson({
          last_name: "Dev"
        })
        .expectStatus(StatusCodes.OK)
        .expectJsonLike({
          last_name: "Dev"
        });
    });

    it("Deletar Usuário", async () => {
      await p
        .spec()
        .delete(`${baseUrl}/users/2`)
        .withHeaders("x-api-key", apiKey)
        .expectStatus(StatusCodes.NO_CONTENT);
    });
  });

  describe("RESOURCES", () => {
    it("Listar resources - Paginado", async () => {
      await p
        .spec()
        .get(`${baseUrl}/resource?page=1`)
        .withHeaders("x-api-key", apiKey)
        .expectStatus(StatusCodes.OK)
        .expectJsonLike({
          page: 1
        });
    });


     it("Obter resources por ID", async () => {
      await p
        .spec()
        .get(`${baseUrl}/resource/2`)
        .withHeaders("x-api-key", apiKey)
        .expectStatus(StatusCodes.OK)
        .expectJsonLike({
          data: {
            id: 2,
            year: 2001
          }
        });
    });

    it("Atualizar resources (PUT)", async () => {
      await p
        .spec()
        .put(`${baseUrl}/resource/2`)
        .withHeaders("x-api-key", apiKey)
        .withJson({
          year: "2001",
          color: "Yellow"
        })
        .expectStatus(StatusCodes.OK)
        .expectJsonLike({
          year: "2001",
          color: "Yellow"
        });
    });

    it("Atualizar resources (PATCH)", async () => {
      await p
        .spec()
        .patch(`${baseUrl}/resource/2`)
        .withHeaders("x-api-key", apiKey)
        .withJson({
          color: "amarelo"
        })
        .expectStatus(StatusCodes.OK)
        .expectJsonLike({
          color: "amarelo"
        });
    });

    it("Deletar resources", async () => {
      await p
        .spec()
        .delete(`${baseUrl}/resource/2`)
        .withHeaders("x-api-key", apiKey)
        .expectStatus(StatusCodes.NO_CONTENT);
    });
  });

  
  });