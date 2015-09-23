<?php
/*
 * ************************************************************************** 
 * 
 * Created on
		2015-8-23 9:38:53
 * 
 * File:
		model_alumno.php
 * 
 * 
 * 
 * Created for project:
		crud
 * 
 * Time of creation:
		2015-8-23 9:38:53
 * 
 * ************************************************************************** 
 * ************************************************************************** 
 */
if ( ! defined('BASEPATH')) exit('No direct script access allowed');
 
class model_alumno extends CI_Model {
	public $table;
	public $id;
	public function __construct() {
		parent :: __construct();
		$this->table = 'alumno';
		$this->id = 'id';
	}
	public function getAll() {
		$data = $this->db->get($this->table);
		$all = array ();
		if ($data->num_rows() > 0) {
			$all = $data->result_array();
		}
		$data->free_result();
		return $all;
	}
	public function create($data) {
		$result = array ();
		try{
			$this->db->insert($this->table, $data);
		}catch(Exception $ex){}
		try {
			$id = $this->db->insert_id();
		} catch (Exception $ex) {
			$id = '';
		}
		if ($id == false) {
			$id = '';
		}
		if ($id != '') {
			$result = array (
				'id' => $id,
				'success' => 'true'
			);
		} else {
			$result = array (
				'id' => $id,
				'success' => 'false'
			);
		}
		return $result;
	}
	public function update($id, $data) {
		$id = trim($id);
		$result = array (
			'success' => 'false'
		);
		if (strlen($id) > 0) {
			$this->db->where($this->id, $id);
			$this->db->update($this->table, $data);
			$num = $this->db->affected_rows();
			if ($num > 0) {
				$result = array (
					'success' => 'true',
					'affected' => $num,
					'error' => ''
				);
			} else {
				$result = array (
					'success' => 'false',
					'affected' => '0',
					'error' => ''
				);
			}
		} else {
			$result = array (
				'success' => 'false',
				'affected' => '0',
				'error' => 'VOID_ID_DATA'
			);
			//data vacia de id
		}
		return $result;
	}
	public function delete($id) {
		$id = trim($id);
		$result = array (
			'success' => 'false'
		);
		if (strlen($id) > 0) {
			$this->db->where($this->id, $id);
			$this->db->delete($this->table);
			$num = $this->db->affected_rows();
			if ($num > 0) {
				$result = array (
					'success' => 'true',
					'affected' => $num,
					'error' => ''
				);
			} else {
				$result = array (
					'success' => 'false',
					'affected' => '0',
					'error' => ''
				);
			}
		} else {
			$result = array (
				'success' => 'false',
				'affected' => '0',
				'error' => 'VOID_ID_DATA'
			); //data vacia de id
		}
		return $result;
	}
	public function getOne($id) {
		$id = trim($id);
		$result = array (
			'success' => 'false',
			'data' => array ()
		);
		if (strlen($id) > 0) {
			$this->db->where($this->id, $id);
			$data = $this->db->get($this->table);
			$all = array ();
			if ($data->num_rows() > 0) {
				$all = $data->result_array();
				if (isset ($all[0]) == true) {
					$all = $all[0];
				} else {
					$all = array ();
				}
			}
			$result = array (
				'success' => 'true',
				'data' => $all
			);
			$data->free_result();
		}
		return $result;
	}
	public function query($sql) {
		$sql = trim($sql);
		$result = array (
			'success' => 'false',
			'data' => array ()
		);
		if (strlen($sql) > 0) {
			$data = $this->db->query($sql);
			$all = array ();
			if ($data->num_rows() > 0) {
				$all = $data->result_array();
			}
			$result = array (
				'success' => 'true',
				'data' => $all
			);
			$data->free_result();
		}
		return $result;
	}
	public function like($data) {
		$result = array (
			'success' => 'false',
			'data' => array ()
		);
		$all = array ();
		foreach ($data as $i => $d) {
			if (strlen($d['data']) > 0) {
				$this->db->like($d['field'], $d['data']);
			}
		}
		$data = $this->db->get($this->table);
		if ($data->num_rows() > 0) {
			$all = $data->result_array();
			$result = array (
				'success' => 'true',
				'data' => $all
			);
		}
		$data->free_result();
		return $result;
	}
	public function where($data) {
		$result = array (
			'success' => 'false',
			'data' => array ()
		);
		$all = array ();
		foreach ($data as $i => $d) {
			if (strlen($d['data']) > 0) {
				$this->db->where($d['field'], $d['data']);
			}
		}
		$data = $this->db->get($this->table);
		if ($data->num_rows() > 0) {
			$all = $data->result_array();
			$result = array (
				'success' => 'true',
				'data' => $all
			);
		}
		$data->free_result();
		return $result;
	}
}
/* End of file model_alumno.php */
/* Location: ./application/models/model_alumno.php */
?>
