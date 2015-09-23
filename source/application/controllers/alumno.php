<?php
/*
 * ************************************************************************** 
 * 
 * Created on
		2015-8-23 9:38:53
 * 
 * File:
		alumno.php
 * 
 * 
 * 
 * Created for project:
		Crud
 * 
 * Time of creation:
		2015-8-23 9:38:53
 * 
 * ************************************************************************** 
 * ************************************************************************** 
 */
if (!defined('BASEPATH'))
	exit('No direct script access allowed');
class Alumno extends CI_Controller {
	private $fields;
	private $name;
	public function __construct() {
		parent::__construct();
		$this -> load -> model("model_alumno");
		$this -> fields = array();
		$this -> fields[1]='nombres';
		$this -> fields[2]='apellidos';
		$this -> fields[3]='email';
		$this -> fields[4]='nacimiento';
		$this -> load -> library('session');
		$this -> name = "alumnoid";
	}
	public function combo() {
		$answer = array();
		$alumno_data = $this -> model_alumno-> getAll();
		$alumnos = array();
		foreach ($alumno_data as $key => $value) {
			$alumnos[$value['id']] = array();
			$alumnos[$value['id']] = $value;
		}
		foreach ($alumnos as $key => $value) {
			$answer[] = array("id" => $value['id'], "alumno" => $value['alumno']);
		}
		header("Content-Type: application/json; charset=utf-8");
		echo json_encode($answer);
	}
	public function all() {
		$answer = array();
		$alumno_data = $this -> model_alumno -> getAll();
    	$alumnos = array();
		foreach ($alumno_data as $key => $value) {
			$alumnos[$value['id']] = array();
			$alumnos[$value['id']] = $value;
		}
		foreach ($alumnos as $key => $value) {
			$answer[] = $value;
		}
		header("Content-Type: application/json; charset=utf-8");
		echo json_encode($answer);
	}
	public function save() {
		$answer = array("success" => "false");
		$data = array();
		$flag = true;
		foreach ($this->fields as $key => $value) {
			$data[$value] = $this -> input -> get_post($value, TRUE);
			if ($data[$value] == '') {
				$flag = false;
			}
		}
		if ($flag) {
			$this -> model_alumno -> create($data);
			$answer = array("success" => "true");
		}
		header("Content-Type: application/json; charset=utf-8");
		echo json_encode($answer);
	}
	public function update() {
		$answer = array("success" => "false");
		$id = $this -> input -> get_post("id", TRUE);
		$data = array();
		$flag = true;
		foreach ($this->fields as $key => $value) {
			$data[$value] = $this -> input -> get_post($value, TRUE);
			if ($data[$value] == '') {
				$flag = false;
			}
		}
		if ($flag) {
			$this -> model_alumno -> update($id, $data);
			$answer = array("success" => "true");
		}

		header("Content-Type: application/json; charset=utf-8");
		echo json_encode($answer);
	}
	public function delete() {
		$answer = array("success" => "true");
		$id="";
		if (isset($_SESSION[$this -> name]) == true) {
			$id = $_SESSION[$this -> name];
		}
		$this -> model_alumno -> delete($id);
		header("Content-Type: application/json; charset=utf-8");
		echo json_encode($answer);
	}
	public function session($data) {
		$answer = array("success" => "true");
		$data = trim($data);
		if (strlen($data) > 0) {
			$_SESSION[$this -> name] = $data;
		}
		$answer = array("success" => "true", "session" => $_SESSION[$this -> name]);
		header("Content-Type: application/json; charset=utf-8");
		echo json_encode($answer);
	}
	public function data(){
		$answer = array("success" => "true");
		$id="";
		if (isset($_SESSION[$this -> name]) == true) {
			$id = $_SESSION[$this -> name];
		}
		$data=$this -> model_alumno -> getOne($id);
		if(isset($data['data'])==true){
			$data=$data['data'];
		}else{
			$data=array();
		}
		foreach ($data as $key => $value) {
			$answer[$key]=$value;
		}
		header("Content-Type: application/json; charset=utf-8");
		echo json_encode($answer);
	}
}

/* End of file alumno.php */
/* Location: ./application/controllers/alumno.php */
?>
