-- Struktur dari tabel `line6_data_alt1`
CREATE TABLE line6_data_alt1 (
L6_ALT1_ACTUAL_PRESSURE_CELL1 FLOAT NOT NULL,
L6_ALT1_RESULT_CELL1 FLOAT NOT NULL,
L6_ALT1_ACTUAL_PRESSURE_CELL3 FLOAT NOT NULL,
L6_ALT1_RESULT_CELL3 FLOAT NOT NULL,
L6_ALT1_ACTUAL_PRESSURE_CELL5 FLOAT NOT NULL,
L6_ALT1_RESULT_CELL5 FLOAT NOT NULL,
L6_ALT1_FILL_FAILURE_TIME FLOAT NOT NULL,
L6_ALT1_FILL_PRESSURE FLOAT NOT NULL,
L6_ALT1_TEST_PRESSURE FLOAT NOT NULL,
L6_ALT1_LEAK_PRESSURE_TOLERANCE FLOAT NOT NULL,
L6_ALT1_TEST_PRESSURE_TOLERANCE FLOAT NOT NULL,
L6_ALT1_FILL_PRESSURE_TOLERANCE FLOAT NOT NULL,
L6_ALT1_STABILIZATION_TIME FLOAT NOT NULL,
L6_ALT1_TEST_TIME FLOAT NOT NULL,
waktu DATETIME NOT NULL ,
status VARCHAR DEFAULT '-'
);

-- Struktur dari tabel `line6_data_alt2`
CREATE TABLE line6_data_alt2 (
L6_ALT2_ACTUAL_PRESSURE_CELL2 FLOAT NOT NULL,
L6_ALT2_RESULT_CELL2 FLOAT NOT NULL,
L6_ALT2_ACTUAL_PRESSURE_CELL4 FLOAT NOT NULL,
L6_ALT2_RESULT_CELL4 FLOAT NOT NULL,
L6_ALT2_ACTUAL_PRESSURE_CELL6 FLOAT NOT NULL,
L6_ALT2_RESULT_CELL6 FLOAT NOT NULL,
L6_ALT2_FILL_FAILURE_TIME FLOAT NOT NULL,
L6_ALT2_FILL_PRESSURE FLOAT NOT NULL,
L6_ALT2_TEST_PRESSURE FLOAT NOT NULL,
L6_ALT2_LEAK_PRESSURE_TOLERANCE FLOAT NOT NULL,
L6_ALT2_TEST_PRESSURE_TOLERANCE FLOAT NOT NULL,
L6_ALT2_FILL_PRESSURE_TOLERANCE FLOAT NOT NULL,
L6_ALT2_STABILIZATION_TIME FLOAT NOT NULL,
L6_ALT2_TEST_TIME FLOAT NOT NULL,
waktu DATETIME NOT NULL ,
status VARCHAR DEFAULT '-'
);

-- Struktur dari tabel `line6_data_alt2_test`
CREATE TABLE line6_data_alt2_test (
L6_ALT2_ACTUAL_PRESSURE_CELL2 FLOAT NOT NULL,
L6_ALT2_RESULT_CELL2 FLOAT NOT NULL,
L6_ALT2_ACTUAL_PRESSURE_CELL4 FLOAT NOT NULL,
L6_ALT2_RESULT_CELL4 FLOAT NOT NULL,
L6_ALT2_ACTUAL_PRESSURE_CELL6 FLOAT NOT NULL,
L6_ALT2_RESULT_CELL6 FLOAT NOT NULL,
L6_ALT2_FILL_FAILURE_TIME FLOAT NOT NULL,
L6_ALT2_FILL_PRESSURE FLOAT NOT NULL,
L6_ALT2_TEST_PRESSURE FLOAT NOT NULL,
L6_ALT2_LEAK_PRESSURE_TOLERANCE FLOAT NOT NULL,
L6_ALT2_TEST_PRESSURE_TOLERANCE FLOAT NOT NULL,
L6_ALT2_FILL_PRESSURE_TOLERANCE FLOAT NOT NULL,
L6_ALT2_STABILIZATION_TIME FLOAT NOT NULL,
L6_ALT2_TEST_TIME FLOAT NOT NULL,
status VARCHAR DEFAULT NULL,
waktu DATETIME NOT NULL 
);

-- Struktur dari tabel `line6_data_apb1`
CREATE TABLE line6_data_apb1 (
L6_APB1_TEMP_LEFT_SETTING FLOAT NOT NULL,
L6_APB1_TEMP_LEFT_ACTUAL FLOAT NOT NULL,
L6_APB1_TEMP_RIGHT_SETTING FLOAT NOT NULL,
L6_APB1_TEMP_RIGHT_ACTUAL FLOAT NOT NULL,
L6_APB1_FIRST_DIPPING_TIME FLOAT NOT NULL,
L6_APB1_WELD_HEAD_DOWN_TIME FLOAT NOT NULL,
L6_APB1_COOLING_TIME FLOAT NOT NULL,
L6_APB1_FLAME_WAITING_TIME FLOAT NOT NULL,
waktu DATETIME NOT NULL 
);

-- Struktur dari tabel `line6_data_apb2`
CREATE TABLE line6_data_apb2 (
L6_APB2_TEMP_LEFT_SETTING FLOAT NOT NULL,
L6_APB2_TEMP_LEFT_ACTUAL FLOAT NOT NULL,
L6_APB2_TEMP_RIGHT_SETTING FLOAT NOT NULL,
L6_APB2_TEMP_RIGHT_ACTUAL FLOAT NOT NULL,
L6_APB2_FIRST_DIPPING_TIME FLOAT NOT NULL,
L6_APB2_WELD_HEAD_DOWN_TIME FLOAT NOT NULL,
L6_APB2_COOLING_TIME FLOAT NOT NULL,
L6_APB2_FLAME_WAITING_TIME FLOAT NOT NULL,
waktu DATETIME NOT NULL 
);

-- Struktur dari tabel `line6_data_cos`
CREATE TABLE line6_data_cos (
L6_COS_POURING_TIME FLOAT NOT NULL,
L6_COS_FAST_POURING_DELAY_TIME FLOAT NOT NULL,
L6_COS_FAST_POURING_DELAY_ON_OFF FLOAT NOT NULL,
L6_COS_COOLING_TIME FLOAT NOT NULL,
L6_COS_TEMP_LEFT_FEEDLINE FLOAT NOT NULL,
L6_COS_TEMP_RIGHT_FEEDLINE FLOAT NOT NULL,
L6_COS_TEMP_CROSSBLOCK FLOAT NOT NULL,
L6_COS_TEMP_ELBOW FLOAT NOT NULL,
L6_COS_TEMP_LEAD_POT FLOAT NOT NULL,
L6_COS_TEMP_DRYING_UNIT FLOAT NOT NULL,
waktu DATETIME NOT NULL 
);

-- Struktur dari tabel `line6_data_hsm1`
CREATE TABLE line6_data_hsm1 (
L6_HSM1_TEMP_LEFT FLOAT NOT NULL,
L6_HSM1_TEMP_RIGHT FLOAT NOT NULL,
L6_HSM1_TEMP_SET_VALUE FLOAT NOT NULL,
L6_HSM1_LID_HOLDER_ACTUAL_POS FLOAT NOT NULL,
L6_HSM1_LID_HOLDER_WAITING_POS FLOAT NOT NULL,
L6_HSM1_LID_HOLDER_HOLDING_POS FLOAT NOT NULL,
L6_HSM1_LID_HOLDER_MELTING_POS FLOAT NOT NULL,
L6_HSM1_LID_HOLDER_SEALING_POS FLOAT NOT NULL,
L6_HSM1_BOX_LIFTER_ACTUAL_POS FLOAT NOT NULL,
L6_HSM1_BOX_LIFTER_WAITING_POS FLOAT NOT NULL,
L6_HSM1_BOX_LIFTER_MELTING_POS FLOAT NOT NULL,
L6_HSM1_BOX_LIFTER_SEALING_POS FLOAT NOT NULL,
L6_HSM1_BOX_LIFTER_FEEDING_POS FLOAT NOT NULL,
L6_HSM1_MIRROR_ACTUAL_POS FLOAT NOT NULL,
L6_HSM1_MIRROR_WAITING_POS FLOAT NOT NULL,
L6_HSM1_MIRROR_MELTING_POS FLOAT NOT NULL,
UPPER_LIMIT_TEMP FLOAT NOT NULL,
LOWER_LIMIT_TEMP FLOAT NOT NULL,
L6_HSM1_TYPE_BATTERY INT(50) NOT NULL,
L6_HSM1_LID_MELTING_TIME FLOAT NOT NULL,
L6_HSM1_BOX_MELTING_TIME FLOAT NOT NULL,
L6_HSM1_SEALING_TIME FLOAT NOT NULL,
waktu DATETIME NOT NULL 
);

-- Struktur dari tabel `line6_data_hsm2`
CREATE TABLE line6_data_hsm2 (
L6_HSM2_TEMP_LEFT FLOAT NOT NULL,
L6_HSM2_TEMP_RIGHT FLOAT NOT NULL,
L6_HSM2_TEMP_SET_VALUE FLOAT NOT NULL,
L6_HSM2_LID_HOLDER_ACTUAL_POS FLOAT NOT NULL,
L6_HSM2_LID_HOLDER_WAITING_POS FLOAT NOT NULL,
L6_HSM2_LID_HOLDER_HOLDING_POS FLOAT NOT NULL,
L6_HSM2_LID_HOLDER_MELTING_POS FLOAT NOT NULL,
L6_HSM2_LID_HOLDER_SEALING_POS FLOAT NOT NULL,
L6_HSM2_BOX_LIFTER_ACTUAL_POS FLOAT NOT NULL,
L6_HSM2_BOX_LIFTER_WAITING_POS FLOAT NOT NULL,
L6_HSM2_BOX_LIFTER_MELTING_POS FLOAT NOT NULL,
L6_HSM2_BOX_LIFTER_SEALING_POS FLOAT NOT NULL,
L6_HSM2_BOX_LIFTER_FEEDING_POS FLOAT NOT NULL,
L6_HSM2_MIRROR_ACTUAL_POS FLOAT)