const valueSetOne: number[] = [30, 28, 76, 70, 37, 77, 27, 28, 10, 67, 51, 63,
    99, 90, 98, 30, 75, 4, 77, 25, 49, 68, 58, 98, 19, 15, 41, 67, 54, 84, 77, 72, 58, 45, 66, 31,
    89, 67, 40, 76, 81, 3, 91, 56, 62, 90, 54, 78, 97, 68, 99, 15, 41, 99, 12, 78, 5, 63, 33, 46, 65,
    75, 9, 82, 74, 55, 96, 44, 76, 85, 63, 68, 44, 34, 28, 29, 47, 67, 82, 54, 74, 41, 86, 83, 44, 6,
    63, 61, 43, 80, 36, 80, 10, 25, 29, 6, 62, 82, 7, 40, 22, 92, 67, 86, 49, 5, 88, 39, 91, 72, 54,
    74, 89, 51, 35, 49, 35, 8, 34, 52, 44, 93, 42, 66, 44, 22, 9, 80, 28, 59, 81, 35, 33, 58, 66, 69,
    42, 10, 13, 68, 60, 75, 23, 48, 13, 76, 0, 52, 26, 88, 16, 49, 23, 3, 34, 72, 70, 39, 36, 68, 16,
    27, 11, 18, 12, 80, 35, 29, 7, 33, 10, 93, 86, 58, 55, 81, 38, 91, 13, 88, 41, 57, 21, 0, 90, 63,
    11, 36, 55, 5, 13, 3, 21, 98, 32, 35, 9, 95, 86, 77, 1, 72, 59, 27, 52, 71, 15, 69, 82, 86, 70, 99,
    77, 16, 91, 37, 19, 71, 86, 38, 2, 10, 82, 57, 37, 19, 71, 16, 2, 77, 46, 9, 74, 33, 89, 99, 13,
    96, 17, 41, 1, 52, 82, 58, 13, 64, 55, 73, 0, 38, 64, 18, 31, 1, 77, 52, 36, 60, 84, 78, 2, 71, 41,
    58, 95, 69, 5, 74, 45, 0, 42, 97, 18, 62, 60, 45, 5, 86, 86, 14, 78, 45, 35, 30, 14, 32, 14, 83, 87,
    96, 13, 81, 18, 47, 71, 25, 15, 70, 8, 87, 71, 59, 31, 16, 97, 94, 45, 96, 82, 96, 46, 80, 91, 37,
    44, 72, 38, 6, 55, 92, 78, 87, 32, 95, 15, 12, 56, 10, 59, 62, 0, 25, 59, 1, 87, 28, 81, 46, 42, 60,
    14, 40, 35, 77, 34, 14, 97, 11, 23, 99, 99, 36, 37, 7, 11, 7, 21, 85, 44, 54, 29, 41, 92, 18, 93, 51,
    61, 43, 74, 97, 12, 76, 52, 81, 7, 35, 57, 46, 20, 90, 20, 87, 31, 27, 51, 54, 61, 12, 86, 85, 8, 75,
    99, 37, 38, 32, 5, 52, 29, 92, 52, 0, 83, 1, 26, 90, 73, 65, 25, 51, 14, 31, 68, 45, 54, 26, 39, 17, 32,
    30, 28, 4, 55, 94, 86, 52, 34, 23, 8, 61, 14, 95, 72, 72, 24, 2, 92, 99, 37, 1, 86, 69, 38, 33, 77, 69,
    91, 6, 76, 16, 2, 61, 93, 40, 78, 43, 13, 39, 61, 37, 99, 93, 98, 4, 48, 27, 37, 73, 55, 91, 73, 35, 75,
    64, 89, 91, 30, 31, 15, 81, 56, 93, 99, 13, 15, 68, 26, 53, 60, 43, 49, 14, 52, 78, 20, 40, 19, 56, 90,
    33, 50, 25, 22, 33, 13, 18, 37, 30, 48, 22, 76, 73, 43, 23, 70, 23, 78, 52, 47, 20, 49, 92, 13, 93, 18,
    61, 42, 83, 37, 52, 22, 90, 77, 89, 63, 75, 55, 69, 0, 38, 29, 7, 26, 4, 68, 45, 47, 87, 28, 3, 87, 92,
    27, 50, 83, 69, 29, 91, 9, 5, 55, 28, 94, 0, 13, 30, 55, 21, 23, 29, 9, 30, 67, 7, 94, 73, 90, 94, 42, 10,
    35, 64, 5, 50, 22, 78, 45, 87, 78, 46, 87, 44, 96, 47, 11, 55, 94, 77, 97, 4, 12, 68, 95, 24, 65, 8, 96,
    46, 55, 26, 89, 43, 46, 5, 87, 83, 91, 62, 21, 97, 60, 17, 7, 95, 84, 84, 34, 42, 6, 43, 73, 82, 76, 63, 66, 66, 2, 71, 12, 1, 73, 76, 23, 11, 97, 23, 87, 18, 46, 74, 10, 85, 25, 66, 5, 30, 14, 95, 20, 89, 69, 35, 62, 36, 57, 93, 87, 30, 71, 34, 24, 42, 76, 28, 66, 98, 26, 46, 85, 17, 12, 57, 77, 76, 85, 39, 90, 27, 35, 84, 84, 85, 68, 39, 85, 63, 19, 41, 24, 12, 97, 25, 9, 40, 84, 33, 18, 26, 40, 22, 50, 60, 52, 1, 38, 2, 72, 72, 98, 63, 63, 56, 28, 92, 12, 34, 71, 32, 24, 27, 92, 75, 15, 18, 17, 62, 2, 52, 37, 37, 26, 66, 92, 59, 33, 72, 10, 79, 52, 34, 42, 79, 35, 1, 64, 78, 45, 32, 83, 44, 58, 28, 87, 33, 73, 83, 0, 69, 55, 30, 80, 53, 88, 14, 33, 31, 84, 14, 99, 2, 67, 80, 67, 54, 77, 12, 29, 98, 36, 4, 0, 92, 71, 53, 37, 54, 50, 1, 84, 15, 92, 63, 5, 8, 24, 75, 12, 20, 55, 34, 30, 63, 47, 8, 29, 35, 52, 34, 75, 40, 40, 93, 87, 83, 78, 30, 24, 94, 48, 60, 16, 15, 44, 93, 46, 53, 88, 51, 32, 96, 45, 5, 76, 97, 78, 63, 74, 21, 60, 34, 67, 81, 58, 63, 7, 13, 55, 8, 42, 89, 38, 32, 74, 73, 65, 21, 85, 81, 98, 18, 41, 15, 18, 46, 31, 21, 48, 98, 47, 4, 40, 37, 61, 28, 71, 31, 86, 68, 24, 72, 55, 50, 72, 7, 11, 97, 69, 98, 49, 67, 71, 39, 22, 54, 66, 30, 39, 81, 93, 70, 59, 24, 84, 31, 58, 19, 5, 30, 43, 65, 43, 79, 87, 7, 98, 87, 68, 23, 62, 14, 84, 24, 54, 98, 78, 24, 69, 79, 60, 90, 81, 2, 75, 53, 51, 93, 26, 14, 99, 64, 40, 57, 7, 73, 18, 17, 99, 15, 87, 2, 2, 48, 88, 13, 77, 66, 86, 21, 48, 36, 70, 62, 41, 7, 28, 13, 65, 69, 4, 14, 43, 44, 85, 22, 88, 62, 77, 31, 78, 74, 12, 56, 32, 72, 0, 39, 87, 26, 77, 88, 22, 24, 8, 89, 30, 28, 26, 22, 75, 50, 97, 56, 29, 40, 88, 38, 76, 15, 36, 65, 59, 31, 45, 47, 2, 90, 48, 64, 61, 98, 57, 76, 4, 29, 99, 40, 74, 1, 95, 54, 44, 10, 49, 10, 40, 73, 27, 37, 22, 65, 17, 72, 60, 22, 94, 93, 68, 3, 50, 1, 6, 42, 77, 46, 30, 95, 82, 35, 60, 63, 36, 29, 26, 16, 4, 25, 17, 86, 10, 26, 18, 17, 76, 19, 46, 31, 72, 92, 68, 18, 24, 19, 40, 31, 53, 3, 93, 42, 64, 25, 9, 77, 4, 2, 97, 38, 54, 49, 49, 25, 46, 46, 82, 29, 10, 49, 58, 14, 50, 26, 9, 8, 67, 27, 81, 30, 4, 55, 94, 78, 53, 31, 37, 24, 66, 77, 52, 64, 71, 31, 39, 91, 5, 67, 86, 8, 43, 57, 45, 29, 57, 30, 47, 34, 17, 52, 80, 35, 63, 91, 40, 0, 33, 87, 35, 4, 9, 11, 21, 95, 77, 32, 63, 59, 12, 63, 84, 68, 79, 9, 77, 73, 90, 77, 4, 30, 67, 66, 16, 12, 73, 92, 0, 49, 74, 81, 77, 34, 57, 68, 62, 64, 34, 31, 18, 43, 15, 21,
    67, 66, 2, 23, 72, 60, 91, 40, 87, 90, 99, 6, 40, 2, 53, 84, 54, 53, 69, 74, 68, 26, 3, 63, 11, 21];

const valueSetTwo: number[] = [
    85, 57, 66, 54, 86, 37, 97, 19, 64, 45, 5, 3, 94, 32, 30, 37, 31, 98, 57, 14, 4, 30, 11, 45, 44, 65, 86, 33, 90, 56, 99, 59, 24, 86, 58, 24, 36, 93, 45, 44, 8, 13, 69, 21, 40, 57, 57, 66, 68, 69, 78, 89, 17, 92, 95, 69, 1, 96, 19, 67, 2, 56, 20, 31, 51, 91, 73, 32, 82, 45, 8, 87, 34, 20, 73, 62, 75, 92, 7, 52, 91, 89, 39, 73, 16, 88, 83, 96, 10, 34, 89, 47, 90, 50, 12, 48, 74, 84, 26, 17, 14, 33, 38, 55, 19, 76, 13, 2, 66, 53, 70, 98, 36, 91, 28, 98, 25, 48, 85, 88, 36, 2, 70, 33, 44, 84, 54, 91, 8, 58, 57, 4, 78, 38, 47, 18, 35, 25, 94, 13, 53, 63, 89, 91, 69, 12, 18, 35, 39, 84, 34, 64, 89, 98, 76, 41, 50, 60, 38, 90, 77, 67, 39, 6, 77, 31, 98, 77, 23, 63, 64, 1, 15, 55, 15, 65, 2, 79, 23, 6, 61, 4, 45, 20, 66, 85, 49, 67, 37, 1, 10, 53, 76, 88, 6, 95, 41, 86, 93, 27, 41, 73, 92, 20, 95, 34, 67, 54, 74, 86, 41, 60, 12, 54, 34, 39, 80, 75, 33, 43, 80, 97, 74, 86, 30, 72, 36, 85, 98, 75, 2, 3, 86, 55, 58, 13, 3, 22, 26, 66, 33, 70, 15, 52, 77, 84, 77, 10, 68, 7, 54, 88, 0, 92, 46, 77, 30, 33, 93, 48, 22, 42, 92, 55, 82, 63, 25, 6, 44, 39, 91, 69, 59, 83, 62, 27, 54, 78, 99, 86, 80, 99, 99, 26, 97, 85, 89, 79, 51, 38, 46, 36, 82, 73, 18, 2, 17, 37, 99, 8, 12, 2, 41, 18, 8, 89, 68, 21, 52, 95, 91, 91, 69, 59, 42, 41, 28, 66, 45, 42, 56, 79, 75, 85, 81, 55, 57, 74, 36, 64, 73, 11, 67, 54, 7, 97, 36, 99, 23, 20, 31, 81, 50, 43, 36, 4, 36, 73, 10, 17, 56, 32, 55, 34, 8, 71, 31, 94, 9, 79, 26, 74, 69, 89, 86, 79, 49, 43, 25, 43, 39, 48, 22, 63, 99, 3, 4, 52, 74, 78, 63, 28, 39, 80, 97, 26, 15, 71, 96, 30, 4, 63, 30, 51, 85, 61, 89, 85, 35, 79, 55, 8, 20, 46, 81, 99, 91, 31, 97, 16, 10, 18, 73, 64, 41, 65, 84, 95, 26, 19, 96, 83, 27, 29, 86, 45, 72, 82, 51, 24, 15, 45, 11, 65, 35, 52, 49, 76, 6, 62, 23, 76, 1, 80, 28, 94, 22, 72, 94, 37, 11, 80, 39, 3, 46, 90, 37, 2, 86, 17, 33, 96, 9, 14, 77, 92, 19, 65, 12, 71, 10, 54, 15, 58, 84, 55, 29, 5, 51, 55, 52, 66, 67, 4, 51, 80, 79, 25, 67, 56, 27, 86, 62, 21, 72, 18, 49, 11, 10, 53, 44, 45, 38, 87, 73, 49, 21, 36, 42, 63, 83, 13, 82, 22, 21, 43, 39, 76, 24, 50, 54, 56, 58, 71, 86, 79, 28, 88, 52, 50, 19, 26, 23, 34, 27, 27, 34, 50, 58, 73, 28, 80, 37, 64, 60, 4, 24, 88, 82, 21, 60, 99, 47, 92, 75, 41, 86, 73, 52, 68, 66, 44, 0, 60, 90, 8, 2, 94, 89, 65, 84, 21, 85, 66, 88, 99, 91, 30, 19, 74, 79, 79, 62, 95, 19, 20, 66, 12, 73, 61, 58, 61, 0, 86, 16, 14, 97, 83, 54, 78, 16, 67, 7, 99, 47, 89, 36, 91, 33, 73, 3, 95, 33, 81, 36, 59, 95, 10, 32, 53, 83, 63, 33, 88, 9, 50, 84, 14, 95, 28, 9, 23, 51, 34, 48, 74, 31, 95, 75, 79, 94, 61, 40, 63, 28, 18, 71, 75, 45, 78, 80, 11, 5, 19, 33, 68, 44, 32, 1, 67, 2, 0, 59, 66, 85, 27, 68, 43, 67, 99, 4, 51, 36, 56, 24, 75, 90, 69, 79, 83, 4, 51, 15, 96, 89, 2, 38, 10, 88, 57, 55, 98, 47, 45, 47, 16, 0, 97, 21, 49, 73, 39, 96, 85, 46, 55, 28, 82, 73, 10, 55, 83, 23, 72, 60, 45, 0, 27, 66, 2, 32, 52, 73, 54, 60, 11, 5, 36, 15, 19, 87, 85, 26, 2, 14, 16, 27, 63, 49, 9, 87, 95, 32, 10, 98, 72, 74, 12, 67, 49, 21, 6, 74, 92, 59, 0, 18, 38, 69, 26, 79, 5, 82, 25, 12, 87, 48, 14, 44, 62, 51, 81, 6, 0, 36, 58, 68, 54, 6, 12, 56, 76, 1, 87, 72, 35, 93, 8, 12, 65, 49, 1, 85, 62, 55, 46, 28, 12, 89, 41, 24, 11, 18, 57, 95, 9, 64, 49, 27, 52, 31, 1, 43, 67, 40, 66, 84, 30, 93, 36, 30, 30, 70, 97, 39, 63, 77, 86, 71, 80, 4, 77, 17, 81, 69, 15, 74, 21, 53, 9, 62, 11, 14, 97, 54, 95, 57, 18, 50, 41, 4, 96, 76, 47, 54, 66, 8, 71, 62, 66, 88, 91, 14, 10, 21, 52, 76, 95, 24, 5, 81, 30, 49, 89, 7, 56, 20, 49, 96, 42, 17, 33, 72, 87, 15, 30, 28, 9, 13, 36, 57, 28, 6, 73, 85, 91, 45, 23, 20, 73, 26, 19, 64, 26, 47, 45, 41, 24, 90, 67, 73, 26, 9, 83, 73, 21, 4, 2, 94, 4, 87, 57, 50, 87, 78, 94, 25, 43, 10, 42, 80, 24, 9, 90, 88, 22, 60, 45, 96, 84, 25, 87, 20, 46, 50, 27, 75, 64, 24, 60, 18, 12, 85, 38, 36, 47, 81, 38, 69, 4, 65, 38, 42, 35, 38, 79, 29, 74, 6, 53, 47, 10, 55, 80, 84, 11, 42, 4, 54, 74, 91, 49, 94, 30, 39, 19, 78, 4, 51, 12, 98, 10, 48, 96, 26, 1, 22, 37, 68, 68, 85, 92, 92, 90, 70, 84, 40, 47, 76, 23, 33, 1, 94, 78, 65, 83, 19, 85, 77, 63, 45, 55, 22, 47, 44, 92, 84, 82, 13, 13, 86, 63, 42, 90, 77, 86, 94, 85, 55, 2, 98, 98, 99, 25, 53, 3, 27, 81, 67, 55, 33, 49, 44, 66, 18, 10, 72, 39, 4, 59, 70, 32, 12, 19, 41, 89, 32, 8, 15, 63, 92, 76, 72, 62, 26, 97, 21, 49, 80, 66, 76, 10, 59, 17, 23, 38, 98, 67, 23, 36, 74, 58, 69, 37, 24, 65, 59, 85, 69, 40, 84, 68, 47, 84, 10, 88, 74, 56, 40, 80, 20, 67, 49, 77, 4, 51, 82, 4, 53, 78, 42, 61, 73, 55, 82, 15, 79, 0, 48, 5, 23, 18, 41, 35, 57, 96, 56, 17, 62, 85, 89, 80, 29, 82, 65, 50, 11, 18, 9, 41, 72, 40, 13, 87, 46, 33, 73, 71, 59, 69, 33, 41, 42, 47, 32, 23, 70, 62, 72, 53, 12, 73, 65, 31, 58, 13, 77, 97, 17, 41, 36, 95, 37, 0, 62, 83, 72, 14, 3, 76, 92, 77, 94, 78, 47, 64, 19, 36, 73, 14, 95, 94, 56, 78, 29, 31, 41, 4, 91, 68, 92, 64, 69, 58, 77, 38, 86, 68, 48, 60, 4, 0, 30, 24, 88, 75, 17, 40, 67, 20, 27, 82, 96, 88, 88, 47, 82, 88, 9, 34, 23, 17, 99, 92, 64, 78, 65, 17, 23, 48, 94, 55, 19, 71, 13, 35, 27, 17, 86, 26, 23, 56, 43, 1, 31, 15, 73, 98, 77, 25, 26, 34, 58, 34, 83, 65, 47, 38, 5, 40, 58, 6, 76, 48, 49, 36, 10, 32, 47, 83, 25, 96, 23, 1, 22, 47, 58, 88, 23, 39, 88, 74, 41, 10, 66, 7, 83, 38, 16, 25, 79, 46, 39, 31, 58, 59, 83, 16, 78, 43, 20, 2, 54, 12, 64, 60, 66, 52, 34, 5, 60, 66, 47, 27, 78, 51, 88, 42, 92, 9, 7, 42, 7, 7, 63, 18, 4, 25, 15, 8, 0, 99, 82, 82, 42, 49, 29, 13, 83, 61, 45, 4, 41, 8, 45, 28, 86, 84, 17, 9, 3, 57, 74, 35, 19, 73, 56, 10, 9, 32, 35, 98, 97, 79, 17, 20, 96, 97, 43, 18, 79, 50, 99, 98, 45, 39, 65, 71, 10, 19, 54, 28, 60, 31, 31, 84, 49, 43, 33, 16, 1, 93, 27, 39, 95, 99, 78, 21, 46, 20, 75, 60, 89, 96, 51, 78, 63, 69, 73, 10, 66, 21, 18, 20, 91, 71, 70, 79, 18, 96, 98, 61, 2, 76, 65, 70, 82, 96, 63, 82, 76, 5, 79, 40, 77, 69, 82, 97, 74, 80, 7, 92, 65, 97, 29, 90, 76, 98, 62, 35, 8, 26, 98, 8, 55, 4, 80, 91, 88, 33, 45, 43, 39, 36, 42, 97, 78, 28, 82, 4, 89, 35, 99, 70, 20, 83, 48, 37, 4, 63, 44, 51, 61, 22, 85, 33, 9, 28, 40, 33, 60, 72, 83, 78, 13, 50, 49, 31, 53, 84, 40, 96, 17, 16, 49, 79, 62, 59, 27, 95, 58, 89, 51, 99, 56, 67, 45, 50, 61, 79, 35, 10, 47, 91, 93, 20, 28, 63, 3, 25, 76, 3, 54, 72, 86, 0, 78, 49, 71, 81, 52, 99, 66, 65, 75, 85, 76, 58, 41, 84, 93, 6, 63, 0, 3, 23, 55, 5, 36, 8, 16, 50, 57, 34, 44, 26, 48, 99, 37, 95, 20, 86, 77, 90, 35, 88, 48, 3, 85, 83, 12, 69, 89, 65, 25, 58, 78, 4, 32, 22, 47, 20, 52, 28, 92, 41, 37, 16, 55, 17, 69, 76, 69, 24, 66, 59, 37, 20, 48, 51, 5, 6, 94, 82, 6, 7, 18, 25, 98, 40, 18, 10, 95, 61, 53, 83, 61, 32, 63, 63, 25, 36, 33, 93, 95, 90, 4, 51, 29, 48, 20, 72, 47, 22, 81, 93, 19, 78, 90, 63, 58, 99, 89, 25, 96, 20, 73, 12, 7, 38, 75, 57, 89, 59, 93, 6, 39, 0, 49, 68, 42, 94, 45, 33, 33, 72, 57, 3, 51, 10, 67, 49, 79, 1, 56, 18, 90, 93, 39, 3, 37, 95, 65, 59, 75, 38, 28, 68, 49, 18, 36, 89, 75, 17, 97, 55, 1, 90, 55, 32, 84, 78, 73, 25, 84, 79, 45, 64, 18, 22, 67, 9, 35, 70, 33, 4, 2, 88, 78, 8, 55, 36, 46, 43, 59, 31, 60, 60, 87, 0, 35, 8, 34, 88, 64, 92, 74, 89, 27, 37, 24, 98, 42, 55, 61, 17, 98, 95, 67, 82, 66, 16, 90, 17, 59, 55, 8, 79, 78, 33, 37, 74, 18, 76, 41, 40, 14, 90, 65, 82, 54, 63, 78, 96, 95, 67, 94, 44, 82, 79, 26, 19, 96, 57, 62, 26, 69, 91, 57, 24, 60, 33, 41, 13, 5, 96, 14, 53, 1, 42, 77, 36, 52, 3, 64, 39, 49, 0, 5, 82, 9, 4, 99, 13, 24, 71, 14, 57, 97, 41, 27, 79, 98, 30, 81, 27, 80, 4, 75, 5, 86, 52, 25, 93, 22, 41, 36, 25, 2, 19, 12, 28, 87, 87, 7, 9, 99, 88, 45, 71, 36, 43, 26, 83, 46, 22, 41, 33, 12, 2, 9, 23, 76, 80, 12, 81, 8, 49, 38, 0, 20, 6, 56, 4, 67, 16, 18, 68, 89, 84, 29, 86, 24, 0, 76, 67, 93, 57, 58, 23, 31, 56, 35, 45, 20, 72, 71, 58, 95, 87, 43, 4, 18, 69, 81, 4, 7, 90, 59, 25, 24, 7, 72, 93, 75, 0, 57, 63, 82, 56, 27, 41, 98, 32, 16, 61, 13, 89, 6, 88, 14, 73, 22, 19, 14, 33, 38, 18, 18, 91, 82, 27, 81, 52, 14, 42, 57, 99, 93, 91, 55, 68, 60, 55, 56, 6, 94, 60, 71, 20, 40, 71, 24, 69, 97, 16, 34, 77, 28, 32, 51, 52, 5, 95, 6, 90, 77, 80, 50, 53, 38, 43, 72, 68, 10, 23, 3, 13, 33, 78, 64, 38, 33, 7, 51, 34, 26, 83, 87, 75, 48, 94, 79, 39, 12, 87, 79, 13, 5, 1, 66, 35, 20, 91, 95, 99, 42, 25, 83, 70, 5, 66, 32, 44, 70, 49, 50, 14, 26, 28, 39, 35, 88, 32, 44, 7, 77, 38, 30, 6, 59, 8, 26, 77, 60, 30, 72, 16, 32, 33, 76, 38, 9, 57, 70, 87, 2, 23, 41, 99, 98, 90, 26, 20, 11, 9, 40, 10, 45, 36, 65, 33, 26, 95, 14, 22, 9, 20, 28, 72, 31, 29, 6, 98, 3, 38, 67, 20, 82, 2, 22, 41, 18, 47, 45, 92, 92, 38, 44, 62, 12, 13, 49, 27, 3, 6, 23, 29, 74, 12, 19, 52, 62, 94, 46, 1, 92, 32, 66, 95, 38, 7, 5, 67, 38, 10, 93, 81, 69, 16, 69, 8, 24, 54, 37, 36, 57, 18, 52, 91, 15, 99, 13, 26, 14, 13, 82, 88, 19, 51, 76, 37, 64, 25, 85, 15, 92, 14, 40, 84, 89, 51, 27, 11, 86, 46, 41, 86, 76, 6, 96, 64, 28, 17, 88, 8, 9, 21, 13, 18, 18, 33, 77, 89, 89, 90, 92, 33, 11, 56, 89, 81, 26, 64, 92, 85, 15, 51, 26, 85, 37, 95, 55, 46, 49, 53, 21, 60, 76, 51, 70, 76, 99, 40, 34, 21, 25, 58, 65, 21, 21, 67, 36, 85, 5, 82, 20, 4, 39, 44, 12, 25, 33, 8, 86, 54, 7, 67, 76, 72, 71, 86, 51, 4, 65, 74, 26, 97, 75, 20, 90, 65, 39, 55, 9, 4, 97, 93, 68, 99, 34, 25, 20, 15, 59, 67, 61, 54, 1, 98, 66, 81, 89, 77, 37, 8, 66, 0, 20, 82, 81, 8, 70, 67, 50, 52, 22, 26, 59, 64, 84, 56, 80, 75, 22, 47, 94, 88, 18, 16, 0, 91, 0, 24, 61, 64, 58, 63, 3, 91, 48, 97, 64, 46, 27, 82, 51, 61, 57, 69, 54, 93, 64, 45, 0, 50, 82, 4, 76, 2, 55, 99, 11, 52, 40, 28, 5, 24, 68, 97, 73, 13, 7, 71, 59, 18, 30, 17, 29, 53, 23, 10, 49, 10, 73, 7, 82, 10, 0, 25, 3, 78, 90, 95, 48, 21, 33, 69, 56, 44, 66, 66, 74, 85, 23, 38, 91, 47, 56, 77, 50, 2, 93, 10, 16, 69, 18, 33, 0, 62, 80, 93, 29, 31, 66, 38, 22, 70, 59, 53, 15, 10, 37, 78, 99, 37, 0, 3, 54, 24, 19, 57, 43, 23, 23, 79, 61, 0, 36, 39, 0, 15, 95, 3, 15, 16, 61, 91, 91, 40, 99, 28, 95, 44, 19, 65, 9, 62, 31, 41, 55, 32, 14, 31, 73, 34, 44, 58, 95, 84, 56, 81, 42, 93, 67, 74, 12, 1, 95, 99, 86, 76, 55, 47, 8, 75, 94, 7, 7, 4, 98, 10, 37, 82, 2, 23, 23, 56, 33, 91, 85, 80, 33, 20, 17, 61, 8, 67, 79, 69, 61, 18, 57, 51, 84, 30, 93, 89, 95, 4, 20, 89, 23, 14, 21, 22, 5, 37, 80, 77, 85, 28, 79, 59, 99, 84, 92, 83, 66, 27, 5, 81, 84, 34, 85, 47, 24, 46, 23, 22, 41, 56, 90, 59, 97, 62, 34, 32, 80, 95, 91, 69, 66, 0, 49, 85, 29, 42, 74, 30, 6, 26, 50, 70, 64, 19, 54, 59, 66, 88, 84, 31, 36, 47, 18, 72, 14, 94, 88, 55, 63, 71, 87, 89, 63, 3, 44, 82, 37, 33, 66, 42, 11, 71, 27, 65, 26, 61, 55, 16, 1, 63, 91, 16, 0, 96, 20, 92, 75, 61, 69, 32, 9, 76, 74, 16, 87, 86, 24, 86, 73, 54, 12, 26, 30, 44, 34, 39, 34, 24, 91, 26, 26, 6, 47, 83, 77, 75, 0, 0, 3, 24, 37, 78, 5, 61, 54, 87, 12, 30, 75, 4, 90, 21, 67, 26, 54, 74, 94, 40, 84, 38, 77, 60, 15, 97, 85, 88, 50, 4, 81, 81, 98, 79, 83, 47, 70, 93, 25, 31, 35, 40, 13, 31, 12, 36, 85, 88, 3, 44, 86, 57, 22, 36, 90, 95, 65, 22, 90, 2, 69, 28, 98, 84, 23, 75, 34, 9, 5, 6, 35, 47, 58, 52, 16, 43, 67, 34, 34, 88, 67, 97, 40, 98, 61, 76, 95, 45, 38, 3, 94, 62, 58, 43, 4, 70, 88, 2, 58, 74, 46, 11, 86, 30, 41, 76, 34, 28, 34, 82, 82, 91, 25, 78, 40, 88, 72, 66, 17, 67, 22, 60, 8, 50, 59, 19, 27, 47, 95, 88, 53, 18, 59, 71, 34, 77, 44, 74, 52, 54, 22, 98, 73, 88, 81, 65, 22, 80, 64, 20, 66, 61, 60, 98, 93, 75, 61, 67, 83, 73, 94, 49, 66, 49, 53, 70, 53, 85, 88, 51, 21, 29, 12, 29, 18, 16, 50, 78, 74, 62, 25, 5, 43, 86, 75, 31, 92, 2, 11, 44, 54, 45, 24, 76, 50, 32, 34, 31, 31, 29, 30, 2, 50, 92, 13, 0, 36, 33, 19, 97, 35, 40, 86, 58, 56, 68, 68, 43, 57, 39, 0, 98, 88, 40, 41, 89, 73, 81, 75, 32, 29, 35, 34, 86, 90, 33, 38, 65, 69, 24, 8, 20, 99, 11, 22, 17, 20, 79, 1, 79, 11, 55, 37, 12, 8, 39, 3, 79, 43, 16, 55, 66, 11, 66, 85, 12, 88, 23, 13, 73, 86, 27, 50, 48, 92, 42, 74, 83, 83, 14, 74, 39, 54, 76, 88, 80, 57, 29, 76, 78, 54, 69, 84, 27, 47, 7, 69, 61, 18, 38, 26, 89, 50, 7, 45, 84, 44, 38, 95, 92, 35, 28, 46, 16, 87, 83, 92, 43, 66, 2, 20, 79, 30, 37, 51, 64, 39, 85, 10, 41, 89, 95, 77, 46, 83, 29, 67, 50, 54, 69, 23, 38, 54, 38, 9, 74, 54, 53, 8, 34, 95, 9, 18, 55, 77, 80, 82, 99, 15, 67, 61, 70, 96, 63, 91, 40, 26, 42, 27, 0, 62, 27, 58, 94, 69, 52, 74, 66, 41, 15, 99, 34, 92, 68, 10, 31, 83, 15, 64, 4, 61, 25, 24, 96, 75, 75, 8, 54, 32, 77, 24, 72, 46, 54, 99, 93, 45, 11, 3, 89, 35, 23, 60, 31, 4, 24, 92, 39, 5, 36, 26, 97, 11, 68, 70, 90, 54, 97, 63, 13, 0, 6, 99, 14, 90, 61, 60, 1, 8, 95, 8, 12, 89, 81, 50, 79, 62, 92, 80, 5, 59, 73, 85, 96, 12, 54, 52, 27, 84, 5, 7, 29, 77, 77, 74, 18, 0, 62, 21, 10, 77, 96, 30, 71, 24, 32, 80, 50, 61, 28, 27, 52, 51, 39, 23, 31, 73, 35, 75, 63, 10, 11, 97, 40, 69, 48, 86, 16, 26, 46, 86, 9, 16, 62, 34, 11, 72, 58, 35, 5, 67, 21, 39, 69, 40, 80, 88, 30, 99, 97, 62, 47, 40, 10, 39, 71, 16, 3, 48, 82, 87, 11, 89, 29, 39, 13, 39, 24, 5, 40, 63, 54, 51, 90, 20, 3, 74, 76, 70, 83, 32, 3, 57, 96, 10, 6, 73, 26, 8, 20, 2, 59, 47, 63, 63, 80, 24, 31, 50, 74, 46, 28, 88, 21, 3, 94, 16, 5, 92, 64, 89, 29, 14, 98, 89, 18, 26, 70, 21, 82, 39, 1, 73, 28, 27, 43, 48, 47, 61, 52, 19, 49, 49, 26, 10, 55, 5, 16, 76, 89, 88, 48, 1, 71, 56, 40, 78, 85, 75, 59, 45, 42, 68, 10, 55, 2, 70, 8, 19, 30, 76, 85, 20, 43, 69, 40, 36, 59, 98, 47, 80, 37, 64, 14, 57, 59, 39, 65, 91, 56, 33, 10, 95, 54, 77, 23, 11, 36, 57, 14, 39, 58, 91, 60, 46, 15, 23, 17, 94, 91, 14, 67, 14, 86, 30, 55, 49, 37, 77, 12, 72, 5, 57, 68, 27, 94, 92, 46, 79, 50, 71, 72, 42, 52, 46, 40, 79, 94, 23, 69, 93, 97, 42, 90, 97, 36, 68, 7, 11, 95, 49, 66, 50, 0, 38, 17, 64, 2, 87, 50, 71, 24, 10, 95, 36, 16, 82, 6, 51, 43, 76, 63, 91, 91, 85, 95, 52, 88, 73, 12, 76, 57, 1, 68, 62, 2, 94, 33, 18, 82, 84, 55, 78, 70, 90, 41, 32, 70, 85, 82, 47, 24, 6, 12, 14, 19, 13, 17, 95, 50, 66, 7, 2, 86, 93, 28, 59, 63, 28, 14, 9, 93, 57, 22, 66, 67, 32, 19, 10, 21, 79, 48, 4, 80, 93, 57, 82, 92, 79, 95, 23, 5, 84, 8, 35, 98, 87, 2, 69, 0, 41, 43, 46, 34, 15, 29, 82, 1, 95, 73, 91, 29, 44, 70, 71, 48, 16, 25, 45, 53, 68, 75, 32, 47, 13, 58, 63, 51, 27, 76, 99, 15, 9, 50, 66, 82, 84, 71, 55, 55, 73, 56, 43, 99, 82, 67, 74, 67, 63, 0, 82, 57, 95, 96, 89, 41, 77, 65, 30, 64, 1, 25, 80, 15, 26, 25, 20, 33, 84, 98, 55, 97, 84, 60, 12, 6, 16, 60, 76, 83, 82, 30, 48, 33, 71, 12, 46, 72, 92, 36, 92, 46, 21, 61, 43, 62, 61, 4, 54, 88, 33, 11, 97, 85, 68, 45, 51, 26, 41, 74, 47, 46, 43, 42, 90, 50, 37, 58, 86, 86, 32, 46, 30, 38, 7, 9, 40, 48, 9, 10, 25, 73, 70, 72, 94, 68, 39, 78, 16, 61, 98, 56, 69, 37, 13, 13, 49, 53, 20, 86, 48, 89, 9, 0, 87, 56, 53, 42, 90, 8, 19, 37, 80, 91, 50, 20, 51, 27, 56, 58, 50, 97, 87, 83, 23, 31, 18, 77, 70, 21, 93, 55, 71, 74, 54, 83, 71, 78, 82, 73, 37, 19, 82, 83, 90, 83, 67, 41, 49, 45, 78, 72, 80, 40, 17, 13, 68, 26, 28, 46, 45, 82, 72, 83, 59, 48, 30, 8, 44, 76, 36, 18, 91, 53, 14, 70, 90, 64, 39, 49, 27, 24, 63, 42, 3, 84, 97, 91, 65, 78, 67, 51, 72, 52, 84, 97, 7, 46, 42, 81, 95, 79, 0, 96, 31, 23, 88, 17, 87, 93, 8, 15, 67, 59, 27, 56, 96, 31, 77, 78, 79, 95, 56, 86, 84, 99, 80, 20, 31, 43, 41, 90, 75, 41, 30, 12, 4, 56, 92, 89, 4, 16, 41, 86, 63, 71, 8, 2, 58, 84, 71, 82, 53, 63, 44, 50, 57, 68, 18, 38, 51, 24, 50, 86, 2, 3, 73, 25, 39, 73, 65, 9, 2, 27, 74, 5, 99, 88, 65, 50, 49, 6, 55, 54, 94, 17, 43, 50, 31, 31, 79, 7, 20, 56, 91, 0, 42, 66, 71, 76, 10, 82, 96, 54, 90, 14, 12, 65, 1, 35, 63, 82, 24, 85, 82, 92, 59, 85, 99, 35, 67, 27, 23, 91, 24, 6, 25, 98, 6, 16, 75, 31, 41, 42, 36, 34, 98, 32, 61, 72, 90, 10, 56, 11, 47, 44, 19, 2, 77, 73, 3, 57, 29, 16, 18, 18, 68, 19, 46, 26, 60, 77, 30, 19, 55, 47, 40, 83, 7, 2, 57, 61, 95, 55, 84, 85, 46, 54, 91, 34, 22, 13, 19, 78, 37, 92, 85, 40, 86, 61, 5, 12, 24, 88, 93, 36, 48, 90, 41, 58, 95, 54, 0, 11, 25, 96, 90, 98, 32, 20, 71, 52, 0, 81, 55, 49, 93, 86, 12, 98, 77, 80, 68, 39, 30, 29, 3, 80, 76, 12, 27, 32, 1, 25, 64, 6, 39, 2, 24, 65, 25, 86, 47, 9, 38, 48, 24, 22, 17, 15, 62, 25, 81, 0, 59, 0, 39, 18, 65, 89, 97, 56, 40, 36, 88, 42, 19, 35, 55, 11, 74, 26, 67, 50, 50, 42, 1, 19, 58, 90, 20, 40, 30, 38, 0, 86, 61, 65, 30, 53, 59, 75, 93, 0, 17, 34, 38, 98, 27, 60, 66, 7, 67, 69, 3, 83, 72, 19, 90, 57, 8, 5, 97, 73, 42, 56, 35, 66, 6, 28, 79, 34, 30, 50, 7, 5, 43, 49, 67, 62, 84, 14, 49, 59, 19, 53, 85, 57, 42, 87, 8, 93, 35, 79, 32, 65, 92, 39, 51, 91, 87, 54, 34, 51, 28, 22, 45, 37, 58, 63, 13, 53, 15, 43, 16, 29, 77, 90, 82, 36, 96, 11, 81, 0, 11, 16, 17, 38, 84, 68, 8, 98, 9, 52, 1, 50, 0, 45, 75, 5, 87, 2, 22, 83, 42, 64, 48, 93, 77, 51, 97, 54, 41, 85, 40, 82, 37, 9, 87, 86, 92, 62, 48, 51, 13, 98, 90, 10, 43, 41, 91, 83, 28, 73, 78, 47, 82, 87, 97, 17, 85, 61, 30, 56, 32, 3, 56, 50, 3, 40, 94, 49, 82, 5, 5, 57, 0, 8, 53, 28, 52, 87, 92, 95, 84, 32, 60, 28, 49, 96, 5, 39, 97, 82, 28, 41, 46, 80, 91, 25, 94, 54, 75, 87, 77, 47, 31, 37, 24, 96, 89, 85, 89, 97, 92, 74, 99, 81, 44, 41, 20, 64, 40, 76, 17, 73, 57, 11, 12, 73, 46, 97, 51, 93, 25, 65, 8, 9, 32, 42, 72, 14, 22, 32, 58, 35, 1, 72, 48, 60, 25, 93, 24, 2, 72, 14, 83, 41, 69, 4, 9, 71, 59, 86, 11, 99, 71, 46, 83, 0, 54, 14, 90, 30, 35, 70, 12, 85, 3, 93, 62, 57, 27, 66, 23, 48, 79, 81, 16, 26, 42, 84, 63, 20, 27, 29, 99, 22, 29, 80, 1, 19, 24, 61, 48, 95, 85, 55, 46, 75, 9, 79, 50, 32, 93, 61, 38, 63, 77, 14, 33, 81, 56, 62, 9, 89, 0, 92, 21, 53, 6
]

export const MockApiServices = {
    async getValueSetOne() {
        return await valueSetOne;
    },
    async getValueSetTwo() {
        return await valueSetTwo;
    }
}