// routes/animal.js
const express = require("express");
const router = express.Router();

// 동물 데이터 (메모리 상 저장)
let animals = [
  { id: 1, species: "Dog", name: "Buddy", birthDate: "2020-05-15" },
  { id: 2, species: "Cat", name: "Whiskers", birthDate: "2018-08-23" },
];

/**
 * @swagger
 * tags:
 *   name: Animals
 *   description: 동물 관리 시스템
 */

/**
 * @swagger
 * /api/animals:
 *   get:
 *     summary: 모든 동물 데이터를 조회합니다.
 *     tags: [Animals]
 *     responses:
 *       200:
 *         description: 모든 동물 데이터의 리스트
 */
router.get("/", (req, res) => {
  res.json(animals);
});

/**
 * @swagger
 * /api/animals/{id}:
 *   get:
 *     summary: 특정 ID의 동물 데이터를 조회합니다.
 *     tags: [Animals]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: 조회할 동물의 ID
 *     responses:
 *       200:
 *         description: 동물 데이터
 *       404:
 *         description: 동물을 찾을 수 없음
 */
router.get("/:id", (req, res) => {
  const animal = animals.find(a => a.id === parseInt(req.params.id));
  if (!animal) return res.status(404).send("Animal not found");
  res.json(animal);
});

/**
 * @swagger
 * /api/animals:
 *   post:
 *     summary: 새로운 동물 데이터를 추가합니다.
 *     tags: [Animals]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Animal'
 *     responses:
 *       201:
 *         description: 생성된 동물 데이터
 */
router.post("/", (req, res) => {
  const newAnimal = {
    id: animals.length > 0 ? animals[animals.length - 1].id + 1 : 1,
    species: req.body.species,
    name: req.body.name,
    birthDate: req.body.birthDate,
  };
  animals.push(newAnimal);
  res.status(201).json(newAnimal);
});

/**
 * @swagger
 * /api/animals/{id}:
 *   put:
 *     summary: ID를 기반으로 기존 동물 데이터를 수정합니다.
 *     tags: [Animals]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: 수정할 동물의 ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Animal'
 *     responses:
 *       204:
 *         description: 업데이트 성공
 */
router.put("/:id", (req, res) => {
  const animal = animals.find(a => a.id === parseInt(req.params.id));
  if (!animal) return res.status(404).send("Animal not found");

  animal.species = req.body.species;
  animal.name = req.body.name;
  animal.birthDate = req.body.birthDate;
  res.status(204).send();
});

/**
 * @swagger
 * /api/animals/{id}:
 *   delete:
 *     summary: ID를 기반으로 동물 데이터를 삭제합니다.
 *     tags: [Animals]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: 삭제할 동물의 ID
 *     responses:
 *       204:
 *         description: 삭제 성공
 */
router.delete("/:id", (req, res) => {
  const animalIndex = animals.findIndex(a => a.id === parseInt(req.params.id));
  if (animalIndex === -1) return res.status(404).send("Animal not found");

  animals.splice(animalIndex, 1);
  res.status(204).send();
});

module.exports = router;
