<?php


class csv extends mysqli{

    private $state_csv = false;
    public function _construct()
    {
        parent::_construct("localhost", "root", "", "project_new");
        if ($this->connect_error) {
            echo 'Fail to connect:' . $this->connect_error;
        }
    }


    public function import($file)
    {
        $file = fopen($file, "r");
        while ($row = fgetcsv($file)) {
            $value = "'" . impload("','", $row) . "'";
            $sql = "INSERT into teacher(fname,mname,lname, id,subject,classid,phone,password ,address,DateBirth)  values (" . $value . ")";
            if ($this->query($sql)) {
                $this->$state_csv = true;
            } else {
                $this->$state_csv = false;
                echo $this->error;
            }
        }
    }





}








?>